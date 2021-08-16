let employee = {
streetAddress: '',
name: '',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    // let newEmployee = {...employee}
    // newEmployee[key] = value
    // return newEmployee
    return Object.assign({}, employee, {[key]: value})
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // employee[key] = value
    // return employee
    return Object.assign(employee, { [key]: value })
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, employee)
    delete newEmployee[key]
    return newEmployee
    
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign(employee)
    delete newEmployee[key]
    return newEmployee
}