// using Application.Roles.DTOs.RoleDTOs;
// using Application.Roles.DTOs.TypeDTOs;
// using Application.Questionnaires.DocumentCategories.DTOs;
using AutoMapper;
using Domain;
// using Application.LicenseGroups.DTOs;
// using Application.Questionnaires.LicenseTypes.DTOs;
// using Application.Clubs.DTOs;

namespace Application.Core
{
    // Defining usings : before the underline means the name of Folder;

    // Role
    // using Role_RoleDto = Roles.DTOs.RoleDTOs.RoleDto;
    // // Type
    // using Type_RoleDto = Roles.DTOs.TypeDTOs.RoleDto;
    // // User Type
    // using UT_UserType = UserTypes.DTOs.UserTypeDto;
    // // Document Category 
    // using DC_UserType = Questionnaires.DocumentCategories.DTOs.UserTypeDto;


    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            // Role
            // CreateMap<Role, Role_RoleDto>().ForMember(d => d.RoleName, o => o.MapFrom(s => s.Name));
            // CreateMap<RoleType, RoleTypeDto>().ForMember(d => d.RoleTypeName, o => o.MapFrom(s => s.UniqueIdentifier));


            // //Type
            // CreateMap<RoleType, TypeDto>().ForMember(d => d.Type, o => o.MapFrom(s => s.UniqueIdentifier));
            // CreateMap<Role, Type_RoleDto>().ForMember(r => r.RoleName, o => o.MapFrom(s => s.Name));

            // // User Type
            // CreateMap<UserType, UT_UserType>().ForMember(d => d.UserTypeId, o => o.MapFrom(s => s.Id)).ForMember(d => d.UserType, o => o.MapFrom(s => s.UniqueIdentifier));

            // // Document Category
            // CreateMap<DocumentCategory, DocumentCategoryDto>().ForMember(d => d.UserTypes, o => o.MapFrom(s => s.DocumentCategoriesAndUserTypes.Select(d => new DC_UserType { TypeId = d.UserTypeId, TypeName = d.UserType.UniqueIdentifier }).ToList())).ForMember(d => d.DocumentCategoryName, o => o.MapFrom(s => s.Name)).ForMember(d => d.DocumentCategoryId, o => o.MapFrom(s => s.Id));

            // // User Groups
            // CreateMap<LicenseGroup, LicenseGroupDto>().ForMember(d => d.LicenseGroupId, o => o.MapFrom(s => s.Id)).ForMember(d => d.LicenseGroupName, o => o.MapFrom(s => s.UniqueIdentifier));

            // // User Types
            // CreateMap<LicenseType, LicenseTypeDto>().ForMember(d => d.LicenseGroup, o => o.MapFrom(s => s.LicenseGroup));

            // // History
            // CreateMap<ClubOperation, HistoryDto>().ForMember(d=>d.Operation, o => o.MapFrom(s=>s.Operation.UniqueIdentifier)).ForMember(d=>d.User, o => o.MapFrom(s=>$"{s.User.Name} {s.User.Surname} {s.User.Patronymic}")).ForMember(d=>d.Date, o => o.MapFrom(s=>s.OperationDate));


        }
    }
}