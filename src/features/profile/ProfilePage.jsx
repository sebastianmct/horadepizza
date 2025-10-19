import React, { useEffect, useState } from "react";
import ResetLocation from "../../utils/ResetLocation";
import { useNavigate } from "react-router-dom";
import validateForm from "../../utils/validate-form";
import "./assets/profile.css";
import { motion } from "framer-motion";
import { slideInLeft } from "../../utils/animations";
import { deleteUser } from "./api/deleteUser";

const ProfilePage = ({ currentUser, handleLogoutUser, handleUpdateUser }) => {
  const [editForm, setEditForm] = useState(false);
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    fullname: "",
    address: "",
    number: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const navigate = useNavigate();
  const validate = validateForm("profile");
  const toggleForm = () => {
    setEditForm(!editForm);
    setFormError("");
    setFormErrors({});
    setFormValue({
      email: "",
      password: "",
      fullname: "",
      address: "",
      number: "",
    });
    ResetLocation();
  };

  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    setFormError("");
    e.preventDefault();
    setFormErrors(validate(formValue));
    window.scrollTo(0, 0);
    if (Object.keys(validate(formValue)).length > 0) {
      setLoading(false);
      return;
    } else {
      const updatedFields = {};
      for (const fieldName of Object.keys(formValue)) {
        if (formValue[fieldName] !== "" && formValue[fieldName] !== currentUser[fieldName]) {
          updatedFields[fieldName] = formValue[fieldName];
        } else {
          updatedFields[fieldName] = currentUser[fieldName];
        }
      }

      const result = await handleUpdateUser(updatedFields);
      if (result.success) {
        setEditForm(false);
        setFormValue({
          email: "",
          password: "",
          fullname: "",
          address: "",
          number: "",
        });
      } else {
        setFormError(result.message);
      }
      setLoading(false);
    }
  };

  const confirmDeleteUser = () => {
    ResetLocation();
    setConfirmationModal(true);
  };
  const handleDeleteUser = async (id) => {
    const response = await deleteUser(id);
    if (response.success) {
      const isLoggedOut = await handleLogoutUser();
      if (isLoggedOut.success) {
        setFormError("");
        navigate("/");
      } else {
        setFormError(isLoggedOut.message);
      }
    } else {
      setFormError(response.message);
      setConfirmationModal(false);
    }
  };

  useEffect(() => {
    document.title = "Perfil | Es hora de pizza";
  }, []);
  return (
    <motion.main
      className="profile"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      <h2>Informacion Personal</h2>
      <p>Detalles personales</p>
      {loading ? (
        <div role="status" className="loader">
          <p>Ya casi estamos...</p>
          <img
            alt="Procesando pedido"
            src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e472hf2wk1f2jou3s5fcnx1vek6ggnfcvhsjbeh7v5u&ep=v1_stickers_search&rid=giphy.gif&ct=s"
          />
        </div>
      ) : editForm ? (
        <form className="profile__form" onSubmit={handleSubmit}>
          {formError && (
            <span aria-live="polite" className="input-validation-error">
              {formError}
            </span>
          )}
          <hr aria-hidden="true" />
          <label htmlFor="email" className="profile__form__info">
            Correo
            <input
              name="email"
              id="email"
              type="text"
              value={formValue.email}
              placeholder={currentUser.email}
              autoComplete="email"
              onChange={handleValidation}
              aria-describedby="email-error"
            />
          </label>

          <span id="email-error" aria-live="polite" className="input-validation-error">
            {formErrors.email}
          </span>
          <hr aria-hidden="true" />

          <label htmlFor="password" className="profile__form__info">
            Contraseña
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              value={formValue.password}
              placeholder="********"
              onChange={handleValidation}
              aria-describedby="password-error"
            />
          </label>

          <span aria-live="polite" id="password-error" className="input-validation-error">
            {formErrors.password}
          </span>
          <hr aria-hidden="true" />

          <label htmlFor="fullname" className="profile__form__info">
            Nombre completo
            <input
              name="fullname"
              id="fullname"
              type="text"
              autoComplete="name"
              value={formValue.fullname}
              placeholder={currentUser.fullname}
              onChange={handleValidation}
              aria-describedby="fullname-error"
            />
          </label>

          <span aria-live="polite" id="fullname-error" className="input-validation-error">
            {formErrors.fullname}
          </span>
          <hr aria-hidden="true" />

          <label htmlFor="address" className="profile__form__info">
            Direccion
            <input
              id="address"
              name="address"
              type="text"
              autoComplete="billing address-level1"
              value={formValue.address}
              placeholder={currentUser.address !== null ? currentUser.address : "Add address..."}
              onChange={handleValidation}
              aria-describedby="address-error"
            />
          </label>

          <span aria-live="polite" id="address-error" className="input-validation-error">
            {formErrors.address}
          </span>
          <hr aria-hidden="true" />

          <label htmlFor="number" className="profile__form__info">
            Numero
            <input
              id="number"
              name="number"
              type="text"
              value={formValue.number}
              autoComplete="mobile tel"
              placeholder={currentUser.number !== null ? currentUser.number : "Add number..."}
              onChange={handleValidation}
              aria-describedby="number-error"
            />
          </label>

          <span aria-live="polite" id="number-error" className="input-validation-error">
            {formErrors.number}
          </span>
          <hr aria-hidden="true" />
          <div className="profile__actions">
            <button
              aria-label="Cancel editing"
              type="button"
              className="active-button-style"
              onClick={() => {
                toggleForm();
              }}>
              Cancelar
            </button>
            <button type="submit" aria-label="Save changes" className="passive-button-style">
              Guardar cambios
            </button>
          </div>
        </form>
      ) : (
        <React.Fragment>
          <section className="profile__info" aria-labelledby="profile-title">
            <h3 id="profile-title" className="visually-hidden">
              Informacion Personal
            </h3>
            {formError && (
              <span aria-live="polite" className="input-validation-error">
                {formError}
              </span>
            )}
            <hr aria-hidden="true" />

            <div className="profile__info__section">
              <h3>Correo</h3>
              <p>{currentUser?.email || ""}</p>
            </div>
            <hr aria-hidden="true" />
            <div className="profile__info__section">
              <h3>Contraseña</h3>
              <p>*********</p>
            </div>
            <hr aria-hidden="true" />
            <div className="profile__info__section">
              <h3>Nombre Completo</h3>
              <p>{currentUser?.fullname || ""}</p>
            </div>
            <hr aria-hidden="true" />
            <div className="profile__info__section">
              <h3>Direccion</h3>
              <p>{currentUser?.address ? currentUser?.address : " N/A"}</p>
            </div>
            <hr aria-hidden="true" />
            <div className="profile__info__section">
              <h3>Numero</h3>
              <p>{currentUser?.number ? currentUser?.number : "N/A"}</p>
            </div>
            <hr aria-hidden="true" />
          </section>
          <div className="profile__actions">
            <button
              type="button"
              className="active-button-style"
              onClick={() => {
                toggleForm();
              }}
              aria-label="Edit profile">
              Editar perfil
            </button>
            <button
              type="button"
              className="passive-button-style"
              onClick={() => confirmDeleteUser()}
              aria-label="Delete account">
              Eliminar Cuenta
            </button>
          </div>
        </React.Fragment>
      )}
      {confirmationModal && (
        <section className="profile__delete-modal">
          <div className="profile__delete-window">
            <h3>Eliminar Cuenta</h3>
            <p>
              ¿Estás seguro de que deseas eliminar tu cuenta? Esta acción es irreversible y se perderán todos tus
            </p>
            <div>
              <button
                type="button"
                className="profile__delete-confirm"
                onClick={() => handleDeleteUser(currentUser.id)}
                aria-label="Confirm account deletion">
                Confirmar
              </button>
              <button
                type="button"
                className="profile__delete-cancel"
                onClick={() => {
                  setConfirmationModal(false);
                  ResetLocation();
                }}
                aria-label="Cancel account deletion">
                Cancelar
              </button>
            </div>
          </div>
        </section>
      )}
    </motion.main>
  );
};

export default ProfilePage;

