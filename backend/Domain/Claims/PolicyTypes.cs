namespace Domain.Claims
{
    public class PolicyTypes
    {
        public class Clubs
        {
            public const string Club = "club.policy";
            public const string View = "clubs.view.policy";
            public const string Add = "clubs.add.policy";
            public const string Edit = "clubs.edit.policy";
            public const string NameChange = "clubs.namechange.policy";
            public const string History = "clubs.history.policy";
            public const string Delete = "clubs.delete.policy";
        }

        public class Associates
        {
            public const string Associate = "associate.policy";
            public const string View = "associates.view.policy";
            public const string Add = "associates.add.policy";
            public const string Edit = "associates.edit.policy";
            public const string PositionChange = "associates.positionchange.policy";
            public const string SendNotification = "associates.sendnotification.policy";
            public const string History = "associates.history.policy";
            public const string Delete = "associates.delete.policy";

        }

        public class Documents
        {
            public const string Document = "document.policy";
            public const string View = "documents.view.policy";
            public const string Add = "documents.add.policy";
            public const string Edit = "documents.edit.policy";
            public const string ChangeStatus = "documents.changestatus.policy";
            public const string History = "documents.history.policy";
            public const string Delete = "documents.delete.policy";

        }

        public class Questionnaires
        {
            public const string Questionnaire = "questionnaire.policy";
            public const string View = "questionnaires.view.policy";
            public const string Add = "questionnaires.add.policy";
            public const string Edit = "questionnaires.edit.policy";
            public const string Delete = "questionnaires.delete.policy";
        }

        public class Announcements
        {
            public const string Announcement = "announcement.policy";
            public const string View = "announcements.view.policy";
            public const string Add = "announcements.add.policy";
            public const string Edit = "announcements.edit.policy";
            public const string SendNotification = "announcements.sendnotification.policy";
            public const string ViewAll = "announcements.viewall.policy";
            public const string DeleteComment = "announcements.deletecomment.policy";
            public const string ChangeStatus = "announcements.changestatus.policy";
            public const string Delete = "announcements.delete.policy";
        }

        public class Roles
        {
            public const string Role = "role.policy";
            public const string View = "roles.view.policy";
            public const string Add = "roles.add.policy";
            public const string Edit = "roles.edit.policy";
            public const string Delete = "roles.delete.policy";
        }

        public class Meetings
        {
            public const string Meeting = "meeting.policy";
            public const string View = "meetings.view.policy";
            public const string Add = "meetings.add.policy";
            public const string Edit = "meetings.edit.policy";
            public const string Cancel = "meetings.cancel.policy";
            public const string Verify = "meetings.verify.policy";
            public const string SendNotification = "meetings.sendnotification.policy";
            public const string Execution = "meetings.execution.policy";
            public const string Conclusion = "meetings.conclusion.policy";
            public const string Calendar = "meetings.calendar.policy";
        }

        public class Licenses
        {
            public const string License = "license.policy";
            public class Standard
            {
                public const string StandardLicense = "standard.policy";
                public const string SectionFeedback = "standard.sectionfeedback.policy";
                public const string SectionComment = "standard.sectioncomment.policy";
                public const string CriterionOverview = "standard.criterionoverview.policy";
                public const string CriterionComment = "standard.criterioncomment.policy";
                public const string CriterionHistory = "standard.criterionhistory.policy";
                public const string CriterionFeedback = "standard.criterionfeedback.policy";
                public const string IncreaseExecutionTime = "standard.increaseexecutiontime.policy";
                public const string SendToRehearsal = "standard.sendtorehearsal.policy";
                public const string ViewDocument = "standard.viewdocument.policy";
                public const string DocumentFeedback = "standard.documentfeedback.policy";
                public const string OtherDepartment = "standard.otherdepartment.policy";

            }

            public class NonStandard
            {
                public const string NonStandardLicense = "nonstandard.policy";
                public const string View = "nonstandard.view.policy";
                public const string AddFile = "nonstandard.addfile.policy";
                public const string Edit = "nonstandard.edit.policy";
                public const string Verify = "nonstandard.verify.policy";
                public const string Accept = "nonstandard.accept.policy";
                public const string SendToCorrection = "announcement.sendtocorrection.policy";
                public const string History = "nonstandard.history.policy";
                public const string Version = "nonstandart.version.policy";
                public const string Delete = "nonstandard.delete.policy";
            }
        }

        public class Seasons
        {
            public const string Season = "season.policy";
            public const string View = "seasons.view.policy";
            public const string Add = "seasons.add.policy";
            public const string Edit = "seasons.edit.policy";
            public const string Delete = "seasons.delete.policy";
            public const string Verify = "seasons.verify.policy";
            public const string Conclusion = "seasons.conclusion.policy";
            public const string History = "seasons.history.policy";
            public const string ViewColor = "seasons.viewcolor.policy";
            public const string EditColor = "seasons.editcolor.policy";
            public const string ViewClub = "seasons.viewclub.policy";
            public const string AddClub = "seasons.addclub.policy";
            public const string EditClub = "seasons.editclub.policy";
            public const string DeleteClub = "seasons.deleteclub.policy";
            public const string ClubHistory = "seasons.clubhistory.policy";
            public const string CancelLicense = "seasons.cancellicense.policy";
            public const string ViewSection = "seasons.viewsection.policy";
            public const string AddSection = "seasons.addsection.policy";
            public const string EditSection = "seasons.editsection.policy";
            public const string SectionHistory = "seasons.sectionhistory.policy";
            public const string CriterionOverview = "seasons.criterionoverview.policy";
            public const string AddCriterion = "seasons.addcriterion.policy";
            public const string EditCriterion = "seasons.editcriterion.policy";
            public const string DeleteCriterion = "seasons.deletecriterion.policy";
            public const string CriterionPreview = "seasons.criterionpreview.policy";
            public const string VerifyCriterion = "seasons.verifycriterion.policy";
            public const string CriterionHistory = "seasons.criterionhistory.policy";
            public const string ViewDocument = "seasons.viewdocument.policy";
            public const string AddDocument = "seasons.adddocument.policy";
            public const string DeleteDocument = "seasons.deletedocument.policy";
            public const string EditDocument = "seasons.editdocument.policy";
            public const string DocumentHistory = "seasons.documenthistory.policy";
        }

        public class Templates
        {
            public const string Template = "template.policy";
            public const string View = "templates.view.policy";
            public const string Edit = "templates.edit.policy";
        }

        public class Reports
        {
            public const string Report = "report.policy";
            public const string View = "reports.view.policy";
        }
    }
}