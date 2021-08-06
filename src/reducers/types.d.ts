export type LoginAction = {
    type: string,
    payload: any
}

export type DispatchType = (state: any, args: LoginAction) => any