using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExamNg.Model
{
    public class Department
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime FoundationDate { get; set; }
        public string ManagerName { get; set; }
        public decimal Budget { get; set; }
        public bool IsTech { get; set; }

        public List<Employee> Employees { get; set; }

        public Department()
        {

        }

        public Department(int id, string name, DateTime foundationDate, string managerName, decimal budget, bool isTech)
        {
            Id = id;
            Name = name;
            FoundationDate = foundationDate;
            ManagerName = managerName;
            Budget = budget;
            IsTech = isTech;
        }
    }
}
