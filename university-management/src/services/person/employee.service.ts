import  {Employee}  from "@/models/person";
import prisma from "@/prisma";



 class EmployeeService {
  async createEmployee({name,employeeID,person}): Promise<Employee> {
   const createdEmployee = await prisma.employee.create({
      data: {
        name,
        employeeID,
        salary,
        personId,
        // Include the person's additional fields, such as blood and contact
        person: {
          connect: { id: personId }, // Associate the employee with the person
        },
      },
    });
    return new Employee({
      ...createdEmployee,
      blood: person.blood,
      contact: person.contact,
    });
  }
}


export default EmployeeService;