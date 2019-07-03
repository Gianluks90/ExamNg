using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExamNg.DTO
{
    public class DepartmentDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime FoundationDate { get; set; }
        public string ManagerName { get; set; }
        public decimal Budget { get; set; }
        public bool IsTech { get; set; }
    }
}
