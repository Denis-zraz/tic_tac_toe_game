export interface InAccount {
    inAccount: boolean;
}

export interface InAccountState {
    account: {
        inAccount: boolean;
    };
}

export interface User {
    name: string;
    activeSymbol: string;
    activeGame: Array<Array<'X' | 'O' | null>>;
}

export type UsersState = {
    inAccount: boolean;
    userOne: User;
    userTwo: User;
};
export interface GameUserSliceState {
    users: UsersState;
}
export interface formState {
    inputValue: string;
    selectValue: string;
}
