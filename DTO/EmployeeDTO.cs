using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExamNg.DTO
{
    public class EmployeeDTO
    {
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public DateTime Birthdate { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }

        public int DepartmentId { get; set; }
    }
}
