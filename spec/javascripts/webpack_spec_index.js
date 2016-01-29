require('./support/sinon/sinon-1.17.2');
require('./support/sinon/sinon-qunit-amd-1.0.0');

var fixturesDiv = document.createElement('div');
fixturesDiv.id = 'fixtures';
document.body.appendChild(fixturesDiv);

if(!window.ENV) window.ENV = {};
require("react_files/mockFilesENV")

require(__dirname + "/../coffeescripts/arr/LoginSpec")
require(__dirname + "/../coffeescripts/arr/walkSpec")
require(__dirname + "/../coffeescripts/backbone-ext/Model/dateAttributesSpec")
require(__dirname + "/../coffeescripts/backbone-ext/ModelSpec")
require(__dirname + "/../coffeescripts/backbone-ext/ViewSpec")
require(__dirname + "/../coffeescripts/behaviors/autocompleteSpec")
require(__dirname + "/../coffeescripts/behaviors/elementTogglerSpec")
require(__dirname + "/../coffeescripts/behaviors/instructureInlineMediaCommentSpec")
require(__dirname + "/../coffeescripts/behaviors/tooltipSpec")
require(__dirname + "/../coffeescripts/calendar/AgendaViewSpec")
require(__dirname + "/../coffeescripts/calendar/EditAssignmentDetailsSpec")
require(__dirname + "/../coffeescripts/calendar/MissingDateDialogViewSpec")
require(__dirname + "/../coffeescripts/calendar/TimeBlockListManagerSpec")
require(__dirname + "/../coffeescripts/calendar/TimeBlockListSpec")
require(__dirname + "/../coffeescripts/calendar/TimeBlockRowSpec")
require(__dirname + "/../coffeescripts/class/cacheSpec.coffee")
require(__dirname + "/../coffeescripts/CollaborationsSpec.coffee")
require(__dirname + "/../coffeescripts/collections/AssignmentGroupCollectionSpec.coffee")
require(__dirname + "/../coffeescripts/collections/CollectionSpec.coffee")
require(__dirname + "/../coffeescripts/collections/content_migrations/ContentCheckboxCollectionSpec.coffee")
require(__dirname + "/../coffeescripts/collections/ContentMigrationIssueCollectionSpec.coffee")
require(__dirname + "/../coffeescripts/collections/DaySubstitutionCollectionSpec.coffee")
require(__dirname + "/../coffeescripts/collections/GroupUserCollectionSpec.coffee")
require(__dirname + "/../coffeescripts/collections/ModuleCollectionSpec.coffee")
require(__dirname + "/../coffeescripts/collections/ModuleItemCollectionSpec.coffee")
require(__dirname + "/../coffeescripts/collections/NeverDropCollectionSpec.coffee")
require(__dirname + "/../coffeescripts/collections/OutcomeResultCollectionSpec.coffee")
require(__dirname + "/../coffeescripts/collections/PaginatedCollectionSpec.coffee")
require(__dirname + "/../coffeescripts/collections/QuizCollectionSpec.coffee")
require(__dirname + "/../coffeescripts/collections/RolesCollectionSpec.coffee")
require(__dirname + "/../coffeescripts/collections/WikiPageCollectionSpec.coffee")
require(__dirname + "/../coffeescripts/collections/WikiPageRevisionsCollectionSpec.coffee")
require(__dirname + "/../coffeescripts/ComboBoxSpec.coffee")
require(__dirname + "/../coffeescripts/CustomListSpec.coffee")
require(__dirname + "/../coffeescripts/dateSpec.coffee")
require(__dirname + "/../coffeescripts/editor/EditorAccessibilitySpec.coffee")
require(__dirname + "/../coffeescripts/editor/KeyboardShortcutsSpec.coffee")
require(__dirname + "/../coffeescripts/external_tools/ExternalToolCollectionSpec.coffee")
require(__dirname + "/../coffeescripts/flashNotificationSpec.coffee")
require(__dirname + "/../coffeescripts/formToJSONSpec.coffee")
require(__dirname + "/../coffeescripts/gradebook/SubmissionDetailsDialogSpec.coffee")
require(__dirname + "/../coffeescripts/gradebook2/GradebookSpec.coffee")
require(__dirname + "/../coffeescripts/gradebook2/gradeFormatterSpec.coffee")
require(__dirname + "/../coffeescripts/gradebook2/OutcomeGradebookGridSpec.coffee")
require(__dirname + "/../coffeescripts/gradebook2/SetDefaultGradeDialogSpec.coffee")
require(__dirname + "/../coffeescripts/gradebook2/SubmissionCellSpec.coffee")
require(__dirname + "/../coffeescripts/GradeCalculatorSpec.coffee")
require(__dirname + "/../coffeescripts/handlebars_helpersSpec.coffee")
require(__dirname + "/../coffeescripts/helpDialogSpec.coffee")
require(__dirname + "/../coffeescripts/i18nSpec.coffee")
require(__dirname + "/../coffeescripts/instructureDateAndTimeSpec.coffee")
require(__dirname + "/../coffeescripts/invokerSpec.coffee")
require(__dirname + "/../coffeescripts/jquery/ajaxJSONSpec.coffee")
require(__dirname + "/../coffeescripts/jquery/fixDialogButtonsSpec.coffee")
require(__dirname + "/../coffeescripts/jquery/mediaCommentSpec.coffee")
require(__dirname + "/../coffeescripts/jquery/mediaCommentThumbnailSpec.coffee")
require(__dirname + "/../coffeescripts/jquery/ModuleSequenceFooterSpec.coffee")
require(__dirname + "/../coffeescripts/jquery/outerclickSpec.coffee")
require(__dirname + "/../coffeescripts/jquery/redirectClickToSpec.coffee")
require(__dirname + "/../coffeescripts/jquery/serializeFormSpec.coffee")
require(__dirname + "/../coffeescripts/jQuery.instructureJqueryPatchesSpec.coffee")
require(__dirname + "/../coffeescripts/jQuery.instructureMiscPluginsSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/assignments/actions/ModerationActionsSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/assignments/FlashMessageHolderSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/assignments/ModeratedColumnHeaderSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/assignments/ModeratedStudentListSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/assignments/ModerationAppSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/assignments/ModerationHeaderSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/assignments/reducers/rootReducerSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/authentication_providers/AuthTypePickerSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/context_modules/FileSelectBoxSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/context_modules/stores/FileStoreSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/context_modules/stores/FolderStoreSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/context_modules/stores/ObjectStoreSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/createStoreSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/dashboard_card/CourseActivitySummaryStoreSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/dashboard_card/DashboardCardActionSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/dashboard_card/DashboardCardBackgroundStoreSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/dashboard_card/DashboardCardBoxSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/dashboard_card/DashboardCardSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/dashboard_card/RecentActivityToggleSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/due_dates/DueDateAddRowButtonSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/due_dates/DueDateCalendarPickerSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/due_dates/DueDateCalendarsSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/due_dates/DueDateRemoveRowLinkSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/due_dates/DueDateRowSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/due_dates/DueDatesSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/due_dates/DueDateTokenWrapperSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/due_dates/OverrideStudentStoreSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/due_dates/TokenActionsSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/epub_exports/AppSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/epub_exports/CourseEpubExportStoreSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/epub_exports/CourseListItemSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/epub_exports/CourseListSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/epub_exports/DownloadLinkSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/epub_exports/GenerateLinkSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/components/AddAppSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/components/AddExternalToolButtonSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/components/AppDetailsSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/components/AppFiltersSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/components/AppListSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/components/AppTileSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/components/ConfigurationFormLti2Spec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/components/ConfigurationFormManualSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/components/ConfigurationFormSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/components/ConfigurationFormUrlSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/components/ConfigurationFormXmlSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/components/ConfigurationsSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/components/ConfigurationTypeSelectorSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/components/ConfigureExternalToolButtonSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/components/DeleteExternalToolButtonSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/components/HeaderSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/components/Lti2EditSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/components/Lti2IframeSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/components/Lti2PermissionsSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/components/SelectInputSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/components/TextAreaInputSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/components/TextInputSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/lib/AppCenterStoreSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/lib/classMungerSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/external_apps/lib/ExternalAppsStoreSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/files/NewFilesStoreSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/DataRowSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/GradingPeriodCollectionSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/GradingPeriodSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/GradingStandardCollectionSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/GradingStandardSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/grid/components/assignmentGradeCellSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/grid/components/column_types/assignmentGroupColumnSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/grid/components/column_types/assignmentPercentageSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/grid/components/column_types/assignmentPointsSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/grid/components/column_types/headerRendererSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/grid/components/column_types/totalColumnSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/grid/components/dropdown_components/assignmentHeaderDropdownOptionsSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/grid/components/dropdown_components/currentOrFinalGradeToggleSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/grid/components/dropdown_components/gradebookKyleMenuSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/grid/components/dropdown_components/muteAssignmentOptionSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/grid/components/dropdown_components/pointsOrPercentageToggleSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/grid/components/dropdown_components/setDefaultGradeOptionSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/grid/components/dropdown_components/totalHeaderDropdownOptionsSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/grid/components/moveTotalColumnToggleSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/grid/helpers/columnArrangerSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/grid/helpers/datesHelperSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/grid/helpers/dueDateCalculatorSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/grid/stores/assignmentGroupsStoreSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/grid/stores/gradebookToolbarStoreSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/grid/stores/gradingPeriodsStoreSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/grid/stores/sectionsStoreSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/grid/stores/studentEnrollmentsStoreSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/gradebook/grid/stores/submissionsStoreSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/navigation_header/NavigationHeaderSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/OutcomeAlignmentDeleteLinkSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/shared/ApiProgressBarSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/shared/helpers/parseLinkHeaderSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/shared/modal-buttonsSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/shared/modal-contentSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/shared/modalSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/shared/stores/ProgressStoreSpec.coffee")
require(__dirname + "/../coffeescripts/legacy/selectContentDialogSpec.coffee")
require(__dirname + "/../coffeescripts/models/AssignmentGroupSpec.coffee")
require(__dirname + "/../coffeescripts/models/AssignmentOverrideSpec.coffee")
require(__dirname + "/../coffeescripts/models/AssignmentSpec.coffee")
require(__dirname + "/../coffeescripts/models/ContentMigrationSpec.coffee")
require(__dirname + "/../coffeescripts/models/ConversationSpec.coffee")
require(__dirname + "/../coffeescripts/models/CourseRestoreSpec.coffee")
require(__dirname + "/../coffeescripts/models/DateGroupSpec.coffee")
require(__dirname + "/../coffeescripts/models/DueDateListSpec.coffee")
require(__dirname + "/../coffeescripts/models/EntrySpec.coffee")
require(__dirname + "/../coffeescripts/models/FileMigrationSpec.coffee")
require(__dirname + "/../coffeescripts/models/FileSpec.coffee")
require(__dirname + "/../coffeescripts/models/FolderSpec.coffee")
require(__dirname + "/../coffeescripts/models/grade_summary/OutcomeSpec.coffee")
require(__dirname + "/../coffeescripts/models/GroupUserSpec.coffee")
require(__dirname + "/../coffeescripts/models/ImageFileSpec.coffee")
require(__dirname + "/../coffeescripts/models/ModuleSpec.coffee")
require(__dirname + "/../coffeescripts/models/OutcomeSpec.coffee")
require(__dirname + "/../coffeescripts/models/progressableSpec.coffee")
require(__dirname + "/../coffeescripts/models/ProgressSpec.coffee")
require(__dirname + "/../coffeescripts/models/PublishableSpec.coffee")
require(__dirname + "/../coffeescripts/models/QuizSpec.coffee")
require(__dirname + "/../coffeescripts/models/RoleSpec.coffee")
require(__dirname + "/../coffeescripts/models/SectionSpec.coffee")
require(__dirname + "/../coffeescripts/models/SubmissionSpec.coffee")
require(__dirname + "/../coffeescripts/models/TopicSpec.coffee")
require(__dirname + "/../coffeescripts/models/TurnitinSettingsSpec.coffee")
require(__dirname + "/../coffeescripts/models/WikiPageRevisionSpec.coffee")
require(__dirname + "/../coffeescripts/models/WikiPageSpec.coffee")
require(__dirname + "/../coffeescripts/object/countTreeSpec.coffee")
require(__dirname + "/../coffeescripts/object/unflattenSpec.coffee")
require(__dirname + "/../coffeescripts/objectCollectionSpec.coffee")
require(__dirname + "/../coffeescripts/paginatedListSpec.coffee")
require(__dirname + "/../coffeescripts/QuizFormulaSolutionSpec.coffee")
require(__dirname + "/../coffeescripts/QuizRubricSpec.coffee")
require(__dirname + "/../coffeescripts/quizzes/QuizOverrideLoaderSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/BreadcrumbCollapsedContainerSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/BreadcrumbsSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/ColumnHeadersSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/CurrentUploadsSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/DialogPreviewSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/DragFeedbackSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/FilePreviewInfoPanelSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/FilePreviewSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/FileRenameFormSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/FilesUsageSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/FilesystemObjectThumbnailSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/FolderChildSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/FriendlyDatetimeSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/ItemCogSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/LoadingIndicatorSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/NoResultsSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/ProgressBarSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/PublishCloudSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/RestrictedDialogFormSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/RestrictedRadioButtonsSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/SearchResultsSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/ShowFolderSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/ToolbarSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/UploadButtonSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/UploadDropZoneSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/UploadProgressSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/UsageRightsDialogSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/UsageRightsIndicatorSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/UsageRightsSelectBoxSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/components/ZipFileOptionsFormSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/modules/FileOptionsCollectionSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/modules/FileUploaderSpec.coffee")
require(__dirname + "/../coffeescripts/react_files/modules/UploadQueueSpec.coffee")
require(__dirname + "/../coffeescripts/ReferenceSpec.coffee")
require(__dirname + "/../coffeescripts/SpeedGraderSelectMenuSpec.coffee")
require(__dirname + "/../coffeescripts/str/apiUserContentSpec.coffee")
require(__dirname + "/../coffeescripts/str/TextHelperSpec.coffee")
require(__dirname + "/../coffeescripts/timezoneSpec.coffee")
require(__dirname + "/../coffeescripts/tinymce_plugins/instructure_external_tools/PluginSpec.coffee")
require(__dirname + "/../coffeescripts/tinymce_plugins/instructure_external_tools/TinyMCEContentItemSpec.coffee")
require(__dirname + "/../coffeescripts/tinymce_plugins/instructure_links/PluginSpec.coffee")
require(__dirname + "/../coffeescripts/TinymceCommandsSpec.coffee")
require(__dirname + "/../coffeescripts/TinymceConfigSpec.coffee")
require(__dirname + "/../coffeescripts/TinymceEditorBoxListSpec.coffee")
require(__dirname + "/../coffeescripts/TinymceEditorboxUtilsSpec.coffee")
require(__dirname + "/../coffeescripts/userNamePartsSpec.coffee")
require(__dirname + "/../coffeescripts/userSettingsSpec.coffee")
require(__dirname + "/../coffeescripts/util/AvatarWidgetSpec.coffee")
require(__dirname + "/../coffeescripts/util/BackoffPollerSpec.coffee")
require(__dirname + "/../coffeescripts/util/brandableCssSpec.coffee")
require(__dirname + "/../coffeescripts/util/ConverterViewControlSpec.coffee")
require(__dirname + "/../coffeescripts/util/coupleTimeFieldsSpec.coffee")
require(__dirname + "/../coffeescripts/util/deparamSpec.coffee")
require(__dirname + "/../coffeescripts/util/enrollmentNameSpec.coffee")
require(__dirname + "/../coffeescripts/util/kalturaAnalyticsSpec.coffee")
require(__dirname + "/../coffeescripts/util/mixinSpec.coffee")
require(__dirname + "/../coffeescripts/util/processItemSelectionsSpec.coffee")
require(__dirname + "/../coffeescripts/util/processMigrationItemSelectionsSpec.coffee")
require(__dirname + "/../coffeescripts/util/roundSpec.coffee")
require(__dirname + "/../coffeescripts/util/secondsToTimeSpec.coffee")
require(__dirname + "/../coffeescripts/util/semanticDateRangeSpec.coffee")
require(__dirname + "/../coffeescripts/util/UniqueDropdownCollectionSpec.coffee")
require(__dirname + "/../coffeescripts/views/accounts/admin_tools/AdminToolsViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/accounts/admin_tools/CourseSearchFormViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/accounts/admin_tools/CourseSearchResultsViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/assignments/AssignmentGroupListItemViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/assignments/AssignmentIndexSpec.coffee")
require(__dirname + "/../coffeescripts/views/assignments/AssignmentListItemViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/assignments/AssignmentSettingsViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/assignments/CreateAssignmentViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/assignments/CreateGroupViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/assignments/DeleteGroupViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/assignments/DueDateViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/assignments/EditHeaderViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/assignments/EditViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/assignments/NeverDropCollectionViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/assignments/SectionDropdownViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/assignments/SpeedgraderLinkViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/assignments/ToggleShowByViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/calendar/CalendarNavigatorSpec.coffee")
require(__dirname + "/../coffeescripts/views/CollectionViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/conferences/ConferenceViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/conferences/EditConferenceViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/content_migrations/ContentCheckboxViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/content_migrations/CopyCourseViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/content_migrations/MigrationConverterViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/content_migrations/NavigationForTreeSpec.coffee")
require(__dirname + "/../coffeescripts/views/content_migrations/ProgressStatusViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/content_migrations/SelectContentViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/content_migrations/subviews/CourseFindSelectViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/content_migrations/subviews/ExternalToolLaunchViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/courses/roster/CreateUsersViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/courses/roster/InvitationsViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/DialogFormViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/DiscussionTopic/EntryViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/DiscussionTopics/EditViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/external_tools/AddAppViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/external_tools/AppFullViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/external_tools/EditViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/external_tools/ExternalToolViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/external_tools/IndexViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/ExternalFeeds/IndexViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/feature_flags/FeatureFlagViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/FilterableSpec.coffee")
require(__dirname + "/../coffeescripts/views/FindFlickrImageViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/GoogleDocsTreeViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/grade_summary/OutcomeDetailViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/grade_summary/OutcomeDialogViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/grade_summary/OutcomeLineGraphViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/grade_summary/OutcomePopoverViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/grade_summary/OutcomeViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/gradebook/CheckboxViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/gradebook/SectionMenuViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/groups/manage/AddUnassignedMenuSpec.coffee")
require(__dirname + "/../coffeescripts/views/groups/manage/AssignToGroupMenuSpec.coffee")
require(__dirname + "/../coffeescripts/views/groups/manage/GroupCategoriesViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/groups/manage/GroupCategoryCreateViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/groups/manage/GroupCategoryEditViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/groups/manage/GroupCreateViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/groups/manage/GroupViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/groups/manage/RandomlyAssignMembersViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/groups/manage/UnassignedUsersViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/InputFilterViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/InputViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/MessageStudentsDialogSpec.coffee")
require(__dirname + "/../coffeescripts/views/modules/ModuleCollectionViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/modules/ModuleItemViewRegisterSpec.coffee")
require(__dirname + "/../coffeescripts/views/MoveDialogSelectSpec.coffee")
require(__dirname + "/../coffeescripts/views/MoveDialogViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/outcomes/ContentViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/outcomes/OutcomeViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/PaginatedCollectionViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/profiles/AvatarDialogViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/profiles/GravatarViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/profiles/UploadFileViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/PublishButtonViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/PublishIconViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/quiz_reports/QuizReportGeneratorSpec.coffee")
require(__dirname + "/../coffeescripts/views/quizzes/IndexViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/quizzes/LDBLoginPopupSpec.coffee")
require(__dirname + "/../coffeescripts/views/quizzes/NoQuizzesViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/quizzes/QuizItemGroupViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/quizzes/QuizItemViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/rubrics/EditRubricPageSpec.coffee")
require(__dirname + "/../coffeescripts/views/SearchViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/SelectViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/SyllabusViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/tinymce/EquationEditorViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/tinymce/InsertUpdateImageViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/ToggleableSubscriptionIconViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/tours/AgendaTourSpec.coffee")
require(__dirname + "/../coffeescripts/views/ValidatedFormViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/ValidatedMixinSpec.coffee")
require(__dirname + "/../coffeescripts/views/wiki/WikiPageContentViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/wiki/WikiPageDeleteDialogSpec.coffee")
require(__dirname + "/../coffeescripts/views/wiki/WikiPageEditViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/wiki/WikiPageIndexItemViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/wiki/WikiPageIndexViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/wiki/WikiPageRevisionsViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/wiki/WikiPageRevisionViewSpec.coffee")
require(__dirname + "/../coffeescripts/views/wiki/WikiPageViewSpec.coffee")
require(__dirname + "/../coffeescripts/widgets/assignmentRubricDialogSpec.coffee")
require(__dirname + "/../coffeescripts/widgets/DatetimeFieldSpec.coffee")
require(__dirname + "/../coffeescripts/xhr/remoteSelectSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/shared/rce/rceStoreSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/shared/rce/serviceRCELoaderSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/shared/rce/loadEventListenersSpec.coffee")
require(__dirname + "/../coffeescripts/tinymce_plugins/instructure_external_tools/ExternalToolsHelperSpec.coffee")
require(__dirname + "/../coffeescripts/tinymce_plugins/instructure_external_tools/initializeExternalToolsSpec.coffee")
require(__dirname + "/../coffeescripts/tinymce_plugins/instructure_record/mediaEditorLoaderSpec.coffee")
require(__dirname + "/../coffeescripts/jsx/shared/rce/loadNewRCESpec.coffee")
