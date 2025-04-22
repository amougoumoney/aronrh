<script>
export default {
    data() {
        return {
            title: "Performance Review",
            text: "Performance",
            text1: "Performance Review"
        }
    },
    methods: {
        toggleHeader() {
            document.getElementById("collapse-header").classList.toggle("active");
            document.body.classList.toggle("header-collapse");
        },
    },
}
</script>

<template>
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
        <div class="content">

            <!-- Breadcrumb -->
            <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                <breadcrumb :title="title" :text="text" :text1="text1" />
                <div class="head-icons ms-2">
                    <a href="javascript:void(0);" class="" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-original-title="Collapse" id="collapse-header" @click="toggleHeader">
                        <i class="ti ti-chevrons-up"></i>
                    </a>
                </div>
            </div>
            <!-- /Breadcrumb -->

            <section class="card border-0">
                <div class="card-header border border-bottom-0 text-center">
                    <h3 class="mb-2">{{$t('EmployeeBasicInformation')}}</h3>
                    <p class="text-muted">Lorem ipsum dollar</p>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="table-responsive">
                            <table class="table table-bordered table-nowrap mb-0">
                                <tbody>
                                    <tr>
                                        <td>
                                            <form>
                                                <div class="mb-3">
                                                    <label class="form-label" for="name">{{$t('name')}}</label>
                                                    <input type="text" class="form-control" id="name">
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label" for="depart3">{{$t('Department')}}</label>
                                                    <input type="text" class="form-control" id="depart3">
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label" for="departa">{{$t('Designation')}}</label>
                                                    <input type="text" class="form-control" id="departa">
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label" for="qualif">{{$t('Qualification')}}: </label>
                                                    <input type="text" class="form-control" id="qualif">
                                                </div>
                                            </form>
                                        </td>
                                        <td>
                                            <form>
                                                <div class="mb-3">
                                                    <label class="form-label" for="eid">Emp ID</label>
                                                    <input type="text" class="form-control" id="eid" value="DGT-009">
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label" for="doj">{{$t('DateofJoin')}}</label>
                                                    <input type="text" class="form-control" id="doj">
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label" for="doc">{{$t('DateofConfirmation')}}</label>
                                                    <input type="text" class="form-control" id="doc">
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label" for="qualif1">{{$t('PreviousyearsofExp')}}
                                                        </label>
                                                    <input type="text" class="form-control" id="qualif1">
                                                </div>
                                            </form>
                                        </td>
                                        <td>
                                            <form>
                                                <div class="mb-3">
                                                    <label class="form-label" for="name1"> {{$t('ROsName')}}</label>
                                                    <input type="text" class="form-control" id="name1">
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label" for="depart1"> {{$t('RODesignation')}}: </label>
                                                    <input type="text" class="form-control" id="depart1">
                                                </div>
                                            </form>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section class="card border-0">
                <div class="card-header border border-bottom-0 text-center">
                    <h3 class="mb-2">{{$t('ProfessionalExcellence')}}</h3>
                    <p class="text-muted">Lorem ipsum dollar</p>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th class="width-pixel">#</th>
                                        <th>{{$t('KeyResultArea')}}</th>
                                        <th>{{$t('KeyPerformanceIndicators')}}</th>
                                        <th>{{$t('Weightage')}}</th>
                                        <th>{{$t('Percentageachieved')}} <br>( {{$t('selfScore')}} )</th>
                                        <th>{{$t('PointsScored')}} <br>( {{$t('self')}} )</th>
                                        <th>{{$t('Percentageachieved')}}  <br>( {{$t('ROsScore')}} )</th>
                                        <th>{{$t('PointsScored')}} <br>( RO )</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td rowspan="2">1</td>
                                        <td rowspan="2">{{$t('Production')}}</td>
                                        <td>{{$t('Quality')}}</td>
                                        <td><input type="text" class="form-control" readonly value="30"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                    </tr>
                                    <tr>
                                        <td>TAT ({{$t('turnaroundtime')}})</td>
                                        <td><input type="text" class="form-control" readonly value="30"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>{{$t('ProcessImprovement')}}</td>
                                        <td>{{$t('PMSNewIdeas')}}</td>
                                        <td><input type="text" class="form-control" readonly value="10"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>{{$t('TeamManagement')}}</td>
                                        <td>{{$t('TeamProductivity')}},{{$t('dynaics')}},{{$t('attendance')}},{{$t('attrition')}}</td>
                                        <td><input type="text" class="form-control" readonly value="5"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>{{$t('KnowledgeSharing')}}</td>
                                        <td>{{$t('Sharingtheknowledgeforteamproductivity')}} </td>
                                        <td><input type="text" class="form-control" readonly value="5"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>{{$t('ReportingandCommunication')}}</td>
                                        <td>{{$t('Emails/Calls/ReportsandOtherCommunication')}}</td>
                                        <td><input type="text" class="form-control" readonly value="5"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" class="text-center">{{$t('Total')}} </td>
                                        <td><input type="text" class="form-control" readonly value="85"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <section class="card border-0">
                <div class="card-header border border-bottom-0 text-center">
                    <h3 class="mb-2">{{$t('PersonalExcellence')}}</h3>
                    <p class="text-muted">Lorem ipsum dollar</p>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th class="width-pixel">#</th>
                                        <th>{{$t('PersonalAttributes')}}</th>
                                        <th>{{$t('KeyIndicators')}}</th>
                                        <th>{{$t('Weightage')}}</th>
                                        <th>{{$t('Percentageachieved')}} <br>( {{$t('selfScore')}} )</th>
                                        <th>{{$t('PointsScored')}} <br>( {{$t('self')}} )</th>
                                        <th>{{$t('Percentageachieved')}} <br>( {{$t('ROsScore')}} )</th>
                                        <th>{{$t('PointsScored')}} <br>( RO )</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td rowspan="2">1</td>
                                        <td rowspan="2">{{$t('Attendance')}}</td>
                                        <td>{{$t('PlannedorUnplannedLeaves')}}</td>
                                        <td><input type="text" class="form-control" readonly value="2"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                    </tr>
                                    <tr>
                                        <td>{{$t('TimeConsciousness')}}</td>
                                        <td><input type="text" class="form-control" readonly value="2"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                    </tr>
                                    <tr>
                                        <td rowspan="2">2</td>
                                        <td rowspan="2">{{$t('Attitude&Behavior')}}</td>
                                        <td>{{$t('TeamCollaboration')}}</td>
                                        <td><input type="text" class="form-control" readonly value="2"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                    </tr>
                                    <tr>
                                        <td>{{$t('Professionalism&Responsiveness')}}</td>
                                        <td><input type="text" class="form-control" readonly value="2"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>{{$t('Policy&Procedures')}} </td>
                                        <td>{{$t('Adherencetopoliciesandprocedures')}}</td>
                                        <td><input type="text" class="form-control" readonly value="2"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>{{$t('Initiatives')}}</td>
                                        <td>{{$t('SpecialEfforts')}}, {{$t('Suggestions')}},{{$t('Ideas')}},etc.</td>
                                        <td><input type="text" class="form-control" readonly value="2"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>{{$t('ContinuousSkillImprovement')}}</td>
                                        <td>{{$t('Preparednesstomovetonextlevel&Trainingutilization')}}</td>
                                        <td><input type="text" class="form-control" readonly value="3"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" class="text-center">{{$t('Total')}} </td>
                                        <td><input type="text" class="form-control" readonly value="15"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                        <td><input type="text" class="form-control" readonly value="0"></td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" class="text-center"><b>{{$t('TotalPercentage')}}(%)</b></td>
                                        <td colspan="5" class="text-center"><input type="text" class="form-control"
                                                readonly value="0"></td>
                                    </tr>
                                    <tr>
                                        <td colspan="8" class="text-center">
                                            <div class="grade-span">
                                                <h4>{{$t('Grade')}}</h4>
                                                <span class="badge bg-inverse-danger">{{$t('Below65Poor')}}</span>
                                                <span class="badge bg-inverse-warning">65-74 {{$t('Average')}}</span>
                                                <span class="badge bg-inverse-info">75-84 {{$t('Satisfactory')}}</span>
                                                <span class="badge bg-inverse-purple">85-92 {{$t('Good')}}</span>
                                                <span class="badge bg-inverse-success">{{$t('Above92Excellent')}}</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section class="card border-0">
                <div class="card-header border border-bottom-0 text-center">
                    <h3 class="mb-2">{{$t('SpecialInitiativesAchievementscontributionsifany')}}</h3>
                    <p class="text-muted">Lorem ipsum dollar</p>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-bordered table-review mb-0" id="table_achievements">
                                <thead>
                                    <tr>
                                        <th class="width-pixel">#</th>
                                        <th>{{$t('BySelf')}}</th>
                                        <th>{{$t('ROsComment')}}</th>
                                        <th>{{$t('HODsComment')}}</th>
                                        <th class="width-64"><button type="button"
                                                class="btn btn-primary btn-sm btn-add-row"><i
                                                    class="fa-solid fa-plus"></i></button></th>
                                    </tr>
                                </thead>
                                <tbody id="table_achievements_tbody">
                                    <tr>
                                        <td>1</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <section class="card border-0">
                <div class="card-header border border-bottom-0 text-center">
                    <h3 class="mb-2">{{$t('Commentsontherole')}}</h3>
                    <p class="text-muted">{{$t('alterationsifanyrequirredlikeaddition/deletionofresponsibilities')}}</p>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-bordered mb-0" id="table_alterations">
                                <thead>
                                    <tr>
                                        <th class="width-pixel">#</th>
                                        <th>{{$t('BySelf')}}</th>
                                        <th>{{$t('ROsComment')}}</th>
                                        <th>{{$t('HODsComment')}}</th>
                                        <th class="width-64"><button type="button"
                                                class="btn btn-primary btn-sm btn-add-row"><i
                                                    class="fa-solid fa-plus"></i></button></th>
                                    </tr>
                                </thead>
                                <tbody id="table_alterations_tbody">
                                    <tr>
                                        <td>1</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section class="card border-0">
                <div class="card-header border border-bottom-0 text-center">
                    <h3 class="mb-2">{{$t('Commentsontherole')}}</h3>
                    <p class="text-muted">{{$t('alterationsifanyrequirredlikeaddition/deletionofresponsibilities')}}</p>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th class="width-pixel">#</th>
                                        <th>{{$t('Strengths')}}</th>
                                        <th>{{$t('AreasforImprovement')}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <section class="card border-0">
                <div class="card-header border border-bottom-0 text-center">
                    <h3 class="mb-2">{{$t('AppraiseesStrengthsandAreasforImprovementperceivedbytheReportingofficer')}}
                    </h3>
                    <p class="text-muted">Lorem ipsum dollar</p>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th class="width-pixel">#</th>
                                        <th>{{$t('Strengths')}}</th>
                                        <th>{{$t('AreasforImprovement')}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section class="card border-0">
                <div class="card-header border border-bottom-0 text-center">
                    <h3 class="mb-2">{{$t('AppraiseesStrengthsandAreasforImprovementperceivedbytheHeadoftheDepartment')}}</h3>
                    <p class="text-muted">Lorem ipsum dollar</p>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th class="width-pixel">#</th>
                                        <th>{{$t('Strengths')}}</th>
                                        <th>{{$t('AreasforImprovement')}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section class="card border-0">
                <div class="card-header border border-bottom-0 text-center">
                    <h3 class="mb-2">{{$t('PersonalGoals')}}</h3>
                    <p class="text-muted">Lorem ipsum dollar</p>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th class="width-pixel">#</th>
                                        <th>{{$t('GoalAchievedduringlastyear')}}</th>
                                        <th>{{$t('Goalsetforcurrentyear')}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section class="card border-0">
                <div class="card-header border border-bottom-0 text-center">
                    <h3 class="mb-2">{{$t('PersonalUpdates')}}</h3>
                    <p class="text-muted">Lorem ipsum dollar</p>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th class="width-pixel">#</th>
                                        <th>{{$t('LastYear')}}</th>
                                        <th>{{$t('Yes')}}/{{$t('No')}}</th>
                                        <th>{{$t('Details')}}</th>
                                        <th>{{$t('CurrentYear')}}</th>
                                        <th>{{$t('Yes')}}/{{$t('No')}}</th>
                                        <th>{{$t('Details')}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>{{$t('Married/Engaged?')}}</td>
                                        <td>
                                            <select class="form-control select">
                                                <option>{{$t('Select')}}</option>
                                                <option>{{$t('Yes')}}</option>
                                                <option>{{$t('No')}}</option>
                                            </select>
                                        </td>
                                        <td><input type="text" class="form-control"></td>
                                        <td>{{$t('MarriagePlans')}}</td>
                                        <td>
                                            <select class="form-control select">
                                                <option>{{$t('Select')}}</option>
                                                <option>{{$t('Yes')}}</option>
                                                <option>{{$t('No')}}</option>
                                            </select>
                                        </td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>{{$t('HigherStudies/Certifications?')}}</td>
                                        <td>
                                            <select class="form-control select">
                                                <option>{{$t('Select')}}</option>
                                                <option>{{$t('Yes')}}</option>
                                                <option>{{$t('No')}}</option>
                                            </select>
                                        </td>
                                        <td><input type="text" class="form-control"></td>
                                        <td>{{$t('PlansForHigherStudy')}}</td>
                                        <td>
                                            <select class="form-control select">
                                                <option>{{$t('Select')}}</option>
                                                <option>{{$t('Yes')}}</option>
                                                <option>{{$t('No')}}</option>
                                            </select>
                                        </td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>{{$t('HealthIssues?')}}</td>
                                        <td>
                                            <select class="form-control select">
                                                <option>{{$t('Select')}}</option>
                                                <option>{{$t('Yes')}}</option>
                                                <option>{{$t('No')}}</option>
                                            </select>
                                        </td>
                                        <td><input type="text" class="form-control"></td>
                                        <td>{{$t('CertificationPlans')}}</td>
                                        <td>
                                            <select class="form-control select">
                                                <option>{{$t('Select')}}</option>
                                                <option>{{$t('Yes')}}</option>
                                                <option>{{$t('No')}}</option>
                                            </select>
                                        </td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>{{$t('Others')}}</td>
                                        <td>
                                            <select class="form-control select">
                                                <option>{{$t('Select')}}</option>
                                                <option>{{$t('Yes')}}</option>
                                                <option>{{$t('No')}}</option>
                                            </select>
                                        </td>
                                        <td><input type="text" class="form-control"></td>
                                        <td>{{$t('Others')}}</td>
                                        <td>
                                            <select class="form-control select">
                                                <option>{{$t('Select')}}</option>
                                                <option>{{$t('Yes')}}</option>
                                                <option>{{$t('No')}}</option>
                                            </select>
                                        </td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section class="card border-0">
                <div class="card-header border border-bottom-0 text-center">
                    <h3 class="mb-2">{{$t('ProfessionalGoalsAchievedforlastyear')}}</h3>
                    <p class="text-muted">Lorem ipsum dollar</p>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-bordered mb-0" id="table_goals">
                                <thead>
                                    <tr>
                                        <th class="width-pixel">#</th>
                                        <th>{{$t('BySelf')}}</th>
                                        <th>{{$t('ROsComment')}}</th>
                                        <th>{{$t('ROsComment')}}</th>
                                        <th class="width-64"><button type="button"
                                                class="btn btn-primary btn-sm btn-add-row"><i
                                                    class="fa-solid fa-plus"></i></button></th>
                                    </tr>
                                </thead>
                                <tbody id="table_goals_tbody">
                                    <tr>
                                        <td>1</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section class="card border-0">
                <div class="card-header border border-bottom-0 text-center">
                    <h3 class="mb-2">{{$t('ProfessionalGoalsfortheforthcomingyear')}}</h3>
                    <p class="text-muted">Lorem ipsum dollar</p>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-bordered mb-0" id="table_forthcoming">
                                <thead>
                                    <tr>
                                        <th class="width-pixel">#</th>
                                        <th>{{$t('BySelf')}}</th>
                                        <th>{{$t('ROsComment')}}</th>
                                        <th>{{$t('ROsComment')}}</th>
                                        <th class="width-64"><button type="button"
                                                class="btn btn-primary btn-sm btn-add-row"><i
                                                    class="fa-solid fa-plus"></i></button></th>
                                    </tr>
                                </thead>
                                <tbody id="table_forthcoming_tbody">
                                    <tr>
                                        <td>1</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section class="card border-0">
                <div class="card-header border border-bottom-0 text-center">
                    <h3 class="mb-2">{{$t('TrainingRequirements')}}</h3>
                    <p class="text-muted">{{$t('ifanytoachievethePerformanceStandardTargetscompletely')}}</p>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-bordered mb-0" id="table_targets">
                                <thead>
                                    <tr>
                                        <th class="width-pixel">#</th>
                                        <th>{{$t('BySelf')}}</th>
                                        <th>{{$t('ROsComment')}}</th>
                                        <th>{{$t('ROsComment')}}</th>
                                        <th class="width-64"><button type="button"
                                                class="btn btn-primary btn-sm btn-add-row"><i
                                                    class="fa-solid fa-plus"></i></button></th>
                                    </tr>
                                </thead>
                                <tbody id="table_targets_tbody">
                                    <tr>
                                        <td>1</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section class="card border-0">
                <div class="card-header border border-bottom-0 text-center">
                    <h3 class="mb-2">{{$t('Anyothergeneralcomments')}}, {{$t('observations')}}, {{$t('suggestions')}} etc.</h3>
                    <p class="text-muted">Lorem ipsum dollar</p>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-bordered mb-0" id="general_comments">
                                <thead>
                                    <tr>
                                        <th class="width-pixel">#</th>
                                        <th>{{$t('Self')}}</th>
                                        <th>RO</th>
                                        <th>HOD</th>
                                        <th class="width-64"><button type="button"
                                                class="btn btn-primary btn-sm btn-add-row"><i
                                                    class="fa-solid fa-plus"></i></button></th>
                                    </tr>
                                </thead>
                                <tbody id="general_comments_tbody">
                                    <tr>
                                        <td>1</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section class="card border-0">
                <div class="card-header border border-bottom-0 text-center">
                    <h3 class="mb-2">{{$t('ForROsUseOnly')}}</h3>
                    <p class="text-muted">Lorem ipsum dollar</p>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>{{$t('Yes')}}/{{$t('No')}}</th>
                                        <th>{{$t('IfYes-Details')}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{{$t('TheTeammemberhasWorkrelatedIssues')}}</td>
                                        <td>
                                            <select class="form-control select">
                                                <option>{{$t('Select')}}</option>
                                                <option>{{$t('Yes')}}</option>
                                                <option>{{$t('No')}}</option>
                                            </select>
                                        </td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>{{$t('TheTeammemberhasLeaveIssues')}}</td>
                                        <td>
                                            <select class="form-control select">
                                                <option>{{$t('Select')}}</option>
                                                <option>{{$t('Yes')}}</option>
                                                <option>{{$t('No')}}</option>
                                            </select>
                                        </td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>{{$t('TheteammemberhasStabilityIssues')}}</td>
                                        <td>
                                            <select class="form-control select">
                                                <option>{{$t('Select')}}</option>
                                                <option>{{$t('Yes')}}</option>
                                                <option>{{$t('No')}}</option>
                                            </select>
                                        </td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>{{$t('TheTeammemberexhibitsnon-supportiveattitude')}}</td>
                                        <td>
                                            <select class="form-control select">
                                                <option>{{$t('Select')}}</option>
                                                <option>{{$t('Yes')}}</option>
                                                <option>{{$t('No')}}</option>
                                            </select>
                                        </td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>{{$t('Anyotherpointsinspecifictonoteabouttheteammember')}}</td>
                                        <td>
                                            <select class="form-control select">
                                                <option>{{$t('Select')}}</option>
                                                <option>{{$t('Yes')}}</option>
                                                <option>{{$t('No')}}</option>
                                            </select>
                                        </td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>{{$t('OverallComment/Performanceoftheteammember')}}</td>
                                        <td>
                                            <select class="form-control select">
                                                <option>{{$t('Select')}}</option>
                                                <option>{{$t('Yes')}}</option>
                                                <option>{{$t('No')}}</option>
                                            </select>
                                        </td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section class="card border-0">
                <div class="card-header border border-bottom-0 text-center">
                    <h3 class="mb-2">{{$t('ForHRDsUseOnly')}}</h3>
                    <p class="text-muted">Lorem ipsum dollar</p>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th>{{$t('OverallParameters')}}</th>
                                        <th>{{$t('AvailablePoints')}}</th>
                                        <th>{{$t('PointsScored')}}</th>
                                        <th>{{$t('ROsComment')}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{{$t('KRAsTargetAchievementPoints')}} ({{$t('willbeconsideredfromtheoverallscorespecifiedinthisdocumentbytheReportingofficer')}})</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>{{$t('PersonalSkillsScores')}}({{$t('ROsPointsfurnishedintheskill&attitudeassessmentsheetwillbeconsidered')}})</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>{{$t('PersonalSkillsScores')}}({{$t('ROsPointsfurnishedintheskill&attitudeassessmentsheetwillbeconsidered')}})</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>{{$t('SpecialAchievementsScore')}} ({{$t('HODtofurnish')}})</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>{{$t('OverallTotalScore')}}</td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="table-responsive">
                        <table class="table table-bordered mb-0">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>{{$t('name')}}</th>
                                    <th>{{$t('Signature')}}</th>
                                    <th>{{$t('Date')}}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{{$t('Employee')}}</td>
                                    <td><input type="text" class="form-control"></td>
                                    <td><input type="text" class="form-control"></td>
                                    <td><input type="text" class="form-control"></td>
                                </tr>
                                <tr>
                                    <td>{{$t('ReportingOfficer')}}</td>
                                    <td><input type="text" class="form-control"></td>
                                    <td><input type="text" class="form-control"></td>
                                    <td><input type="text" class="form-control"></td>
                                </tr>
                                <tr>
                                    <td>HOD</td>
                                    <td><input type="text" class="form-control"></td>
                                    <td><input type="text" class="form-control"></td>
                                    <td><input type="text" class="form-control"></td>
                                </tr>
                                <tr>
                                    <td>HRD</td>
                                    <td><input type="text" class="form-control"></td>
                                    <td><input type="text" class="form-control"></td>
                                    <td><input type="text" class="form-control"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>

        <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
            <p class="mb-0">2014 - 2025 &copy; AronHR.</p>
            <p>{{$t('designed')}} &amp; {{$t('developedBy')}} <a href="javascript:void(0);" class="text-primary">{{$t('dreams')}}</a></p>
        </div>

    </div>
    <!-- /Page Wrapper -->
</template>