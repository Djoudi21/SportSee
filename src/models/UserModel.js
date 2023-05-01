export default class UserModel {
    firstName
    lastName
    age
    calorieCount
    todayScore
    proteinCount
    lipidCount
    carbohydrateCount
    constructor(firstName, lastName, age, todayScore, calorieCount, proteinCount, lipidCount, carbohydrateCount) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.todayScore = todayScore
        this.calorieCount = calorieCount
        this.proteinCount = proteinCount
        this.lipidCount = lipidCount
        this.carbohydrateCount =carbohydrateCount
    }
}
