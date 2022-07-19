import type { Enum } from '../../../client/interfaces/Enum';
import { isString } from '../../../utils/isString';
import type { WithEnumExtension } from '../interfaces/Extensions/WithEnumExtension';

/**
 * Extend the enum with the x-enum properties. This adds the capability
 * to use names and descriptions inside the generated enums.
 * @param enumerators
 * @param definition
 */
export const extendEnum = (enumerators: Enum[], definition: WithEnumExtension): Enum[] => {
    const names = definition['x-enum-varnames']?.filter(isString);
    const labels = definition['x-enum-labels']?.filter(isString);
    const descriptions = definition['x-enum-descriptions']?.filter(isString);
    const detaileddescriptions = definition['x-enum-detaileddescriptions']?.filter(isString);

    return enumerators.map((enumerator, index) => ({
        name: names?.[index] || enumerator.name,
        label: labels?.[index] || enumerator.label,
        description: descriptions?.[index] || enumerator.description,
        detaileddescription: detaileddescriptions?.[index] || enumerator.detaileddescription,
        value: enumerator.value,
        type: enumerator.type,
    }));
};
