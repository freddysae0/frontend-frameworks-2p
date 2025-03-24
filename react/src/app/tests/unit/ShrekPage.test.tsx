import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';

import Home from '../../page'; // Ajusta la ruta según la estructura de tu proyecto
import shrekAdjetives from '../../shrek_adjetives.json';

describe('Home Component', () => {
  it('changes adjective when button is clicked', () => {
    render(<Home />);

    // Obtener el span del adjetivo
    const adjectiveSpan = screen.getByTestId('adjective-span');
    const button = screen.getByRole('button');

    // Verificar que el adjetivo inicial sea shrekAdjetives[0]
    expect(adjectiveSpan).toHaveTextContent(shrekAdjetives[0]);

    // Hacer click en el botón
    fireEvent.click(button);

    // Verificar que el adjetivo haya cambiado a shrekAdjetives[1]
    expect(adjectiveSpan).toHaveTextContent(shrekAdjetives[1]);
  });
});
