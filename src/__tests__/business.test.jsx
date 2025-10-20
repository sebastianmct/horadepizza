import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

import { sumar } from '../utils/sumar';
import { formatPrice } from '../utils/formatPrice';
import { calculateTotal } from '../utils/cart';
import { generateOrderId } from '../utils/orders';
import { validateEmail } from '../utils/validateEmail';

describe('Router básico (Hora de Pizza)', () => {
  function Home() {
    return (
      <div>
        <h1>Inicio - Hora de Pizza</h1>
        <a href="/menu">Ver menú</a>
      </div>
    );
  }
  function About() {
    return (
      <div>
        <h1>Sobre Nosotros - Hora de Pizza</h1>
        <p>Nuestra misión: la mejor pizza cerca de ti</p>
      </div>
    );
  }

  it('renderiza la ruta /about correctamente', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Sobre Nosotros - Hora de Pizza')).toBeTruthy();
  });
});

describe('sumar()', () => {
  it('debería retornar la suma de dos números', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  it('debería lanzar error si se pasan strings', () => {
    expect(() => sumar('dos', 'tres')).toThrow('Ambos argumentos deben ser números');
  });

  it('debería lanzar error si falta un argumento', () => {
 
    expect(() => sumar(5)).toThrow('Ambos argumentos deben ser números');
  });

  it('debería lanzar error si se pasan valores null o undefined', () => {
    expect(() => sumar(null, undefined)).toThrow('Ambos argumentos deben ser números');
  });
});

describe('formatPrice() y utilidades de pedido', () => {
  it('formatPrice formatea a CLP (ej: $12.000)', () => {
    const s = formatPrice(12000);
    expect(s).toContain('12.000');
    expect(s).toContain('$'); 
  });

  it('calculateTotal calcula el total del carrito correctamente', () => {
    const items = [
      { id: 'p1', name: 'Pizza Margherita', price: 8.5, qty: 2 },
      { id: 'p2', name: 'Bebida', price: 2.5, qty: 1 },
    ];
    expect(calculateTotal(items)).toBeCloseTo(19.5);
  });

  it('calculateTotal con carrito vacío retorna 0', () => {
    expect(calculateTotal([])).toBe(0);
  });

  it('generateOrderId produce un id con formato esperado', () => {
    const id = generateOrderId();
    expect(id.startsWith('HP-')).toBeTruthy();
    expect(id).toMatch(/^HP-\d{13,}-\d{4}$/);
  });

  it('validateEmail valida correos del negocio correctamente', () => {
    expect(validateEmail('cliente@horadepizza.com')).toBeTruthy();
    expect(validateEmail('no-valido@')).toBeFalsy();
  });
});