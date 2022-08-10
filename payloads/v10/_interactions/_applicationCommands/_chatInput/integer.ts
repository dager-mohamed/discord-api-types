import type {
	APIApplicationCommandOptionBase,
	APIApplicationCommandOptionWithAutocompleteOrChoicesWrapper,
	APIInteractionDataOptionBase,
} from './base';
import type { APIApplicationCommandOptionChoice, ApplicationCommandOptionType } from './shared';

interface APIApplicationCommandIntegerOptionBase
	extends APIApplicationCommandOptionBase<ApplicationCommandOptionType.Integer> {
	/**
	 * If the option is an `INTEGER` or `NUMBER` type, the minimum value permitted.
	 */
	min_value?: number;
	/**
	 * If the option is an `INTEGER` or `NUMBER` type, the maximum value permitted.
	 */
	max_value?: number;
	/**
	 * For option type STRING, the minimum allowed length (minimum of 0, maximum of 6000)
	 */
	min_length?: number;
	/**
	 * 	For option type STRING, the maximum allowed length (minimum of 1, maximum of 6000)
	 */
	max_length?: number;
}

export type APIApplicationCommandIntegerOption = APIApplicationCommandOptionWithAutocompleteOrChoicesWrapper<
	APIApplicationCommandIntegerOptionBase,
	APIApplicationCommandOptionChoice<number>
>;

export interface APIApplicationCommandInteractionDataIntegerOption
	extends APIInteractionDataOptionBase<ApplicationCommandOptionType.Integer, number> {
	focused?: boolean;
}
