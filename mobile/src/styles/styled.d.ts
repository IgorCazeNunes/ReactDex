/* eslint-disable @typescript-eslint/naming-convention */
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        /** Background Colors */
        background: {
            /** background: #09090b */
            black: string;

            // /** background: #f7f7f0 */
            white: string;

            /** background: #e3350d */
            vermillion: string;

            /** background: #e2e2e2 */
            platinum: string;

            /** background: #312e38 */
            dark: string;
        };

        /** Fonts Colors */
        font: {
            /** color: #ffffff */
            white: string;

            /** color: #000000 */
            black: string;

            /** color: #333333 */
            dark: string;
        };

        /** Status Bar Variation Background Colors */
        statusBackground: {
            /** background: #ff0000 */
            hp: string;

            /** background: #f08030 */
            attack: string;

            /** background: #f8d030 */
            defense: string;

            /** background: #6890f0 */
            special_attack: string;

            /** background: #78c850 */
            special_defense: string;

            /** background: #f85888 */
            speed: string;
        };

        /** Pokemon Type Variation Background Colors */
        typeBackground: {
            /** background: #a8a878 */
            normal: string;

            /** background: #f08030 */
            fire: string;

            /** background: #c0302b */
            fighting: string;

            /** background: #6890f0 */
            water: string;

            /** background: #a890f0 */
            flying: string;

            /** background: #75c850 */
            grass: string;

            /** background: #a040a0 */
            poison: string;

            /** background: #f8d030 */
            electric: string;

            /** background: #e0c068 */
            ground: string;

            /** background: #f85888 */
            psychic: string;

            /** background: #b8a03b */
            rock: string;

            /** background: #98d8d8 */
            ice: string;

            /** background: #a8b820 */
            bug: string;

            /** background: #7038f8 */
            dragon: string;

            /** background: #705898 */
            ghost: string;

            /** background: #705848 */
            dark: string;

            /** background: #b8b8d0 */
            steel: string;

            /** background: #ee99ac */
            fairy: string;
        };
    }
}
