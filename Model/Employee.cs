using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExamNg.Model
{
    public class Employee
    {
        public Department department { get; set; }

        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public DateTime Birthdate { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }

        public int DepartmentId { get; set; }

        public Employee()
        {

        }

        public Employee(int id, string firstname, string lastname, DateTime birthdate, string phone, string email, string address, int departmentId)
        {
            Id = id;
            Firstname = firstname;
            Lastname = lastname;
            Birthdate = birthdate;
            Phone = phone;
            Email = email;
            Address = address;
            DepartmentId = departmentId;
        }
    }
}
