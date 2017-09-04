export interface MonthlyUsersResult {
    name: String;
    vehicle: String;
    plate: String;
}

export interface UserAssigned {
    color: string;
    email: string;
    is_monthly: boolean;
    model: string;
    plate: string;
    days: Date[];
}
