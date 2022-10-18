import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from '../../src/router/AppRouter';

describe ('Pruebas en <AppRouter />', () => {

    test('Debe de mostrar el login si no esta autenticado', () => {

        const contextValue = {
            logged: false,
        }

        render(

            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getByText('Login') ).toBeTruthy();

        // Sirve para contar la coantidad de veces que se espera la palabra login
        // expect( screen.getAllByText('Login').length ).toBe(2)

    })

    test('Debe de mostrar el componente de Marvel si esta autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                id: 'ABC123',
                name: 'Rodrigo Cousillas'
            }
        }

        render(

            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1)

    });

});