export const USER_ROLE = {
  user: "user",
  manager: "manager",
} as const;
export type TUserRole = keyof typeof USER_ROLE;
