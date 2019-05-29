/**
 * @fileoverview
 *
 * Beginners 02: Enums.
 * - Learn how to create enums
 * - Learn how to create constant enums
 * - Learn how to use enums
 * - Learn the difference between enums and constant enums
 *
 * Tipps:
 * - Hover+command values to see what the TypeScript compiler does with the typings
 */



enum UserStatus {
    ACTIVATED,
    DEACTIVATED
}

interface IUserWithStatus {
    name: string,
    status?: UserStatus
}

const myUserWithStatus: IUserWithStatus = {
    name: 'Max Mustermann'
};

console.log(myUserWithStatus);

// [[TODO 1]] Find out which values are set if you use the enum as a value e.g. 
// new user instance with the status "ACTIVATED" (use npm run exercise:03 for output)



// [[PLENUM]]
// [[TODO 2]] You can also create constant enums by prefixing the enum with `const`
// use the link provided below to find the difference in the compiled output.

/**
 * @see http://www.typescriptlang.org/play/#src=enum%20UserStatus%20%7B%0D%0A%09ACTIVE%2C%0D%0A%09INACTIVE%0D%0A%7D%0D%0A%0D%0Aconst%20enum%20UserStatusConst%20%7B%0D%0A%09ACTIVE%2C%0D%0A%09INACTIVE%0D%0A%7D%0D%0A%0D%0Ainterface%20IUser%20%7B%0D%0A%09status%3A%20UserStatus%20%7C%20UserStatusConst%0D%0A%7D%0D%0A%0D%0Aconst%20user%3A%20IUser%20%3D%20%7B%0D%0A%09status%3A%20UserStatus.ACTIVE%0D%0A%7D%0D%0A%0D%0Aconst%20userWithConst%3A%20IUser%20%3D%20%7B%0D%0A%09status%3A%20UserStatusConst.ACTIVE%0D%0A%7D
 */