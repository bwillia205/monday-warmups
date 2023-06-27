/* eslint-disable */
export default {
    displayName: 'monday-warmup',
    preset: 'ts-jest',
    transform: {
        '^.+\\.[tj]s$': ['ts-jest', { tsconfig: 'tsconfig.spec.json' }],
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
};
