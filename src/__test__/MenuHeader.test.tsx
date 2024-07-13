import { render, screen } from "@testing-library/react";
import MenuHeader from "@/components/menu/MenuHeader";
import user from "@testing-library/user-event";
import { MemoryRouter } from 'react-router-dom';

describe('Компонент меню в шапке', () => {
    it('Компонент имеет тег nav', () => {
        render(<MenuHeader/>)
        expect(screen.getByRole("navigation", { name: "" })).toBeInTheDocument();
    })
    
    it("Создание списка из 4 элементов", async () => {
        render(<MenuHeader />);
        const items = await screen.findAllByRole("listitem");
        expect(items).toHaveLength(4);
    });

    it('Клик по 1 элементу переводит на #', async () => {
        render(
            <MemoryRouter>
                <MenuHeader />
            </MemoryRouter>
        );

        const firstLink = screen.getByRole('link', {name: 'О компании'})

        await user.click(firstLink)

        expect(window.location.hash).toBe('#hero');
    })
})

