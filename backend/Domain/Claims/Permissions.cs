using System.Collections.Generic;

namespace Domain.Claims
{
    public static class Permissions
    {

        public static List<string> GetAllPermission()
        {
            List<string> permissions = new List<string>
            { 
                // Clubs
                Clubs.Club,
                Clubs.View, Clubs.Add, Clubs.Edit, Clubs.NameChange, Clubs.History, Clubs.Delete,
                //Associates
                Associates.Associate,
                Associates.View, Associates.Add, Associates.Edit, Associates.PositionChange,Associates.SendNotification, Associates.History, Associates.Delete,
                // Documents
                Documents.Document,
                Documents.View, Documents.Add, Documents.Edit, Documents.ChangeStatus, Documents.History, Documents.Delete,
                // Questionnaires
                Questionnaires.Questionnaire,
                Questionnaires.View, Questionnaires.Add, Questionnaires.Edit, Questionnaires.Delete,
                // Announcements
                Announcements.Announcement,
                Announcements.View, Announcements.Add, Announcements.Edit, Announcements.SendNotification,Announcements.ViewAll, Announcements.DeleteComment, Announcements.ChangeStatus, Announcements.Delete,
                // Roles
                Roles.Role,
                Roles.View, Roles.Add, Roles.Edit, Roles.Delete,
                // Meetings
                Meetings.Meeting,
                Meetings.View, Meetings.Add, Meetings.Edit, Meetings.Cancel, Meetings.Verify, Meetings.SendNotification, Meetings.Execution, Meetings.Conclusion, Meetings.Calendar,
                // License
                Licenses.License,
                // License - standard
                Licenses.Standard.StandardLicense,
                Licenses.Standard.SectionFeedback, Licenses.Standard.SectionComment, Licenses.Standard.CriterionOverview, Licenses.Standard.CriterionComment, Licenses.Standard.CriterionHistory, Licenses.Standard.CriterionFeedback, Licenses.Standard.IncreaseExecutionTime, Licenses.Standard.SendToRehearsal, Licenses.Standard.ViewDocument, Licenses.Standard.DocumentFeedback, Licenses.Standard.OtherDepartment,
                // License - nonstandard
                Licenses.NonStandard.NonStandardLicense,
                Licenses.NonStandard.View, Licenses.NonStandard.AddFile, Licenses.NonStandard.Edit, Licenses.NonStandard.Verify, Licenses.NonStandard.Accept, Licenses.NonStandard.SendToCorrection, Licenses.NonStandard.History, Licenses.NonStandard.Version, Licenses.NonStandard.Delete,
                // Seasons
                Seasons.Season,
                Seasons.View, Seasons.Add, Seasons.Edit, Seasons.Delete, Seasons.Verify, Seasons.Conclusion, Seasons.History, Seasons.ViewColor, Seasons.EditColor, Seasons.ViewClub, Seasons.AddClub, Seasons.EditClub, Seasons.DeleteClub, Seasons.ClubHistory, Seasons.CancelLicense, Seasons.ViewSection, Seasons.AddSection, Seasons.EditSection, Seasons.SectionHistory, Seasons.CriterionOverview, Seasons.AddCriterion, Seasons.EditCriterion, Seasons.DeleteCriterion, Seasons.CriterionPreview, Seasons.VerifyCriterion, Seasons.CriterionHistory, Seasons.ViewDocument, Seasons.AddDocument, Seasons.DeleteDocument, Seasons.EditDocument, Seasons.DocumentHistory,
                // Templates
                Templates.Template,
                Templates.View, Templates.Edit,
                //Reports
                Reports.Report,
                Reports.View


            };

            return permissions;
        }
        public class Clubs
        {
            public const string Club = "club";
            public const string View = "clubs.view";
            public const string Add = "clubs.add";
            public const string Edit = "clubs.edit";
            public const string NameChange = "clubs.namechange";
            public const string History = "clubs.history";
            public const string Delete = "clubs.delete";

            public static List<string> GetPermissions()
            {
                return new List<string>
                {
                    View, Add, Edit, NameChange, History, Delete
                };
            }
        }

        public class Associates
        {
            public const string Associate = "associate";
            public const string View = "associates.view";
            public const string Add = "associates.add";
            public const string Edit = "associates.edit";
            public const string PositionChange = "associates.positionchange";
            public const string SendNotification = "associates.sendnotification";
            public const string History = "associates.history";
            public const string Delete = "associates.delete";

            public static List<string> GetPermissions()
            {
                return new List<string>
                {
                    View, Add, Edit, PositionChange,SendNotification, History, Delete,
                };
            }

        }

        public class Documents
        {
            public const string Document = "document";
            public const string View = "documents.view";
            public const string Add = "documents.add";
            public const string Edit = "documents.edit";
            public const string ChangeStatus = "documents.changestatus";
            public const string History = "documents.history";
            public const string Delete = "documents.delete";

            public static List<string> GetPermissions()
            {
                return new List<string>
                {
                    View, Add, Edit, ChangeStatus, History, Delete,
                };
            }

        }

        public class Questionnaires
        {
            public const string Questionnaire = "questionnaire";
            public const string View = "questionnaires.view";
            public const string Add = "questionnaires.add";
            public const string Edit = "questionnaires.edit";
            public const string Delete = "questionnaires.delete";

            public static List<string> GetPermissions()
            {
                return new List<string>
                {
                    View, Add, Edit, Delete,
                };
            }
        }

        public class Announcements
        {
            public const string Announcement = "announcement";
            public const string View = "announcements.view";
            public const string Add = "announcements.add";
            public const string Edit = "announcements.edit";
            public const string SendNotification = "announcements.sendnotification";
            public const string ViewAll = "announcements.viewall";
            public const string DeleteComment = "announcements.deletecomment";
            public const string ChangeStatus = "announcements.changestatus";
            public const string Delete = "announcements.delete";

            public static List<string> GetPermissions()
            {
                return new List<string>
                {
                    View, Add, Edit, SendNotification,ViewAll, DeleteComment, ChangeStatus, Delete
                };
            }
        }

        public class Roles
        {
            public const string Role = "role";
            public const string View = "roles.view";
            public const string Add = "roles.add";
            public const string Edit = "roles.edit";
            public const string Delete = "roles.delete";

            public static List<string> GetPermissions()
            {
                return new List<string>
                {
                    View, Add, Edit, Delete
                };
            }
        }

        public class Meetings
        {
            public const string Meeting = "meeting";
            public const string View = "meetings.view";
            public const string Add = "meetings.add";
            public const string Edit = "meetings.edit";
            public const string Cancel = "meetings.cancel";
            public const string Verify = "meetings.verify";
            public const string SendNotification = "meetings.sendnotification";
            public const string Execution = "meetings.execution";
            public const string Conclusion = "meetings.conclusion";
            public const string Calendar = "meetings.calendar";

            public static List<string> GetPermissions()
            {
                return new List<string>
                {
                    View, Add, Edit, Cancel, Verify, SendNotification, Execution, Conclusion, Calendar
                };
            }
        }

        public class Licenses
        {
            public const string License = "license";
            public class Standard
            {
                public const string StandardLicense = "standard";
                public const string SectionFeedback = "standard.sectionfeedback";
                public const string SectionComment = "standard.sectioncomment";
                public const string CriterionOverview = "standard.criterionoverview";
                public const string CriterionComment = "standard.criterioncomment";
                public const string CriterionHistory = "standard.criterionhistory";
                public const string CriterionFeedback = "standard.criterionfeedback";
                public const string IncreaseExecutionTime = "standard.increaseexecutiontime";
                public const string SendToRehearsal = "standard.sendtorehearsal";
                public const string ViewDocument = "standard.viewdocument";
                public const string DocumentFeedback = "standard.documentfeedback";
                public const string OtherDepartment = "standard.otherdepartment";

                public static List<string> GetPermissions(string sectionName)
                {
                    return new List<string>
                    {
                        sectionName+"-"+SectionFeedback, sectionName+"-"+SectionComment, sectionName+"-"+CriterionOverview, sectionName+"-"+CriterionComment, sectionName+"-"+CriterionHistory, sectionName+"-"+CriterionFeedback, sectionName+"-"+IncreaseExecutionTime, sectionName+"-"+SendToRehearsal, sectionName+"-"+ViewDocument, sectionName+"-"+DocumentFeedback, sectionName+"-"+OtherDepartment,
                    };
                }

            }

            public class NonStandard
            {
                public const string NonStandardLicense = "nonstandard";
                public const string View = "nonstandard.view";
                public const string AddFile = "nonstandard.addfile";
                public const string Edit = "nonstandard.edit";
                public const string Verify = "nonstandard.verify";
                public const string Accept = "nonstandard.accept";
                public const string SendToCorrection = "announcement.sendtocorrection";
                public const string History = "nonstandard.history";
                public const string Version = "nonstandart.version";
                public const string Delete = "nonstandard.delete";

                public static List<string> GetPermissions(string sectionName)
                {
                    return new List<string>
                    {
                        sectionName+"-"+View, sectionName+"-"+AddFile, sectionName+"-"+Edit, sectionName+"-"+Verify, sectionName+"-"+Accept, sectionName+"-"+SendToCorrection, sectionName+"-"+History, sectionName+"-"+Version, sectionName+"-"+Delete,
                    };
                }
            }
        }

        public class Seasons
        {
            public const string Season = "season";
            public const string View = "seasons.view";
            public const string Add = "seasons.add";
            public const string Edit = "seasons.edit";
            public const string Delete = "seasons.delete";
            public const string Verify = "seasons.verify";
            public const string Conclusion = "seasons.conclusion";
            public const string History = "seasons.history";
            public const string ViewColor = "seasons.viewcolor";
            public const string EditColor = "seasons.editcolor";
            public const string ViewClub = "seasons.viewclub";
            public const string AddClub = "seasons.addclub";
            public const string EditClub = "seasons.editclub";
            public const string DeleteClub = "seasons.deleteclub";
            public const string ClubHistory = "seasons.clubhistory";
            public const string CancelLicense = "seasons.cancellicense";
            public const string ViewSection = "seasons.viewsection";
            public const string AddSection = "seasons.addsection";
            public const string EditSection = "seasons.editsection";
            public const string SectionHistory = "seasons.sectionhistory";
            public const string CriterionOverview = "seasons.criterionoverview";
            public const string AddCriterion = "seasons.addcriterion";
            public const string EditCriterion = "seasons.editcriterion";
            public const string DeleteCriterion = "seasons.deletecriterion";
            public const string CriterionPreview = "seasons.criterionpreview";
            public const string VerifyCriterion = "seasons.verifycriterion";
            public const string CriterionHistory = "seasons.criterionhistory";
            public const string ViewDocument = "seasons.viewdocument";
            public const string AddDocument = "seasons.adddocument";
            public const string DeleteDocument = "seasons.deletedocument";
            public const string EditDocument = "seasons.editdocument";
            public const string DocumentHistory = "seasons.documenthistory";

            public static List<string> GetPermissions()
            {
                return new List<string>
                    {
                        View, Add, Edit, Delete, Verify, Conclusion, History, ViewColor, EditColor, ViewClub, AddClub, EditClub, DeleteClub, ClubHistory, CancelLicense, ViewSection, AddSection, EditSection, SectionHistory, CriterionOverview, AddCriterion, EditCriterion, DeleteCriterion, CriterionPreview, VerifyCriterion, CriterionHistory, ViewDocument, AddDocument, DeleteDocument, EditDocument, DocumentHistory,
                    };
            }
        }

        public class Templates
        {
            public const string Template = "template";
            public const string View = "templates.view";
            public const string Edit = "templates.edit";

            public static List<string> GetPermissions()
            {
                return new List<string>
                    {
                        View, Edit,
                    };
            }
        }

        public class Reports
        {
            public const string Report = "report";
            public const string View = "reports.view";

            public static List<string> GetPermissions()
            {
                return new List<string>
                    {
                        View
                    };
            }
        }
    }
}