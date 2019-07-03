using AutoMapper;
using ExamNg.DTO;
using ExamNg.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExamNg
{
    public class NgProfile : Profile
    {
        public NgProfile()
        {
            this.CreateMap<Department, DepartmentDTO>().ReverseMap();
            this.CreateMap<Employee, EmployeeDTO>().ReverseMap();
        }
    }
}
