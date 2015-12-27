/**
 * Example of Require.js boostrap javascript
 */


requirejs.config({
    // Path mappings for the logical module names
    paths: {
        'knockout': 'libs/knockout/knockout-3.3.0',
        'jquery': 'libs/jquery/jquery-2.1.3.min',
        'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.11.4.min',
        'promise': 'libs/es6-promise/promise-1.0.0.min',
        'hammerjs': 'libs/hammer/hammer-2.0.4.min',
        'ojs': 'libs/oj/v1.1.1/min',
        'ojL10n': 'libs/oj/v1.1.1/ojL10n',
        'ojtranslations': 'libs/oj/v1.1.1/resources',
        'signals': 'libs/js-signals/signals.min',
        'crossroads': 'libs/crossroads/crossroads.min',
        'text': 'libs/require/text',
        'jquery.ui.widget': 'libs/jquery-ui/jquery.ui.widget',
        'jquery-fileupload': 'libs/jquery-fileupload/jquery.fileupload',
        'jquery-iframe-transport': 'libs/jquery-fileupload/jquery.iframe-transport'

    },
    // Shim configurations for modules that do not expose AMD
    shim: {
        'jquery': {
            exports: ['jQuery', '$']
        },
        'crossroads': {
            deps: ['signals'],
            exports: 'crossroads'
        }
    },
    // This section configures the i18n plugin. It is merging the Oracle JET built-in translation 
    // resources with a custom translation file.
    // Any resource file added, must be placed under a directory named "nls". You can use a path mapping or you can define
    // a path that is relative to the location of this main.js file.
    config: {
        ojL10n: {
            merge: {
                //'ojtranslations/nls/ojtranslations': 'resources/nls/menu'
            }
        }
    }
});




/**
 * A top-level require call executed by the Application.
 * Although 'ojcore' and 'knockout' would be loaded in any case (they are specified as dependencies
 * by the modules themselves), we are listing them explicitly to get the references to the 'oj' and 'ko'
 * objects in the callback
 */
require(['ojs/ojcore',
    'knockout',
    'jquery',
    'ojs/ojrouter',
    'ojs/ojknockout',
    'ojs/ojbutton',
    'ojs/ojtoolbar',
    'ojs/ojmenu',
    'ojs/ojmodule',
    'ojs/ojdatetimepicker',
    'ojs/ojdialog',
    'ojs/ojlistview',
    'ojs/ojdatacollection-common',
    'ojs/ojmenu',
    'ojs/ojmodel',
    'ojs/ojgauge',
    'ojs/ojcheckboxset',
    'ojs/ojselectcombobox',
    'ojs/ojpagingcontrol',
    'ojs/ojdatacollection-common',
    'ojs/ojdialog',
    'ojs/ojtable',
    'ojs/ojfilmstrip',
    'jquery-fileupload',
    'jquery-iframe-transport',
    'jquery.ui.widget'
],
        function (oj, ko, $) // this callback gets executed when all required modules are loaded
        {
            var self = this;
            oj.ModuleBinding.defaults.modelPath = 'modules/';
            oj.ModuleBinding.defaults.viewPath = 'text!../templates/';
            oj.ModuleBinding.defaults.viewSuffix = '.tmpl.html';

            function rootViewModel() {

                self.setMainContent = ko.observable('mainContent');

                self.optionChangeHandler = function (event, data) {
                    if (data.value !== 'library') {
                        data.value = 'mainContent';
                    }
                    self.setMainContent(data.value);
                };
                self.ojDatePickerValue = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date(2015, 9, 10)));


            }
            function MsgDialogVM() {
                self.detailErrTextArr = ko.observableArray([]);
                self.detailText = 'key';
                self.emsg = 'error msg';
                self.detailErrTextArr.push({detailText: self.emsg, 'type': 'error'});
                self.titleIcon = 'image/piginIcon.PNG'; //relative to the location of page
            }

            function NotSubscribedToLaVM() {
                self.subscribedToAppLA = ko.observable(true);
            }

           

            function clickTestModel() {
                var self = this;
                self.clickTest = function () {
                    alert("click eve");
                }
            }

            function viewModel()
            {
                var converterFactory = oj.Validation.converterFactory("number");
                var currencyOptions =
                        {
                            style: "currency",
                            currency: "USD",
                            currencyDisplay: "symbol"
                        };
                this.currencyConverter = converterFactory.createConverter(currencyOptions);

                var model = oj.Model.extend({
                    idAttribute: 'ID'
                });
                var data = [{
                        "ID": 100,
                        "TITLE": "Java: A Beginner's Guide",
                        "AUTHOR": "Herbert Schildt",
                        "PUBLISH_DATE": "2014-04-15",
                        "PRICE": 40,
                        "RATING": 4.5,
                        "IMAGE_URL": "image/piginIcon.PNG",
                        "REVIEWS": 37
                    },
                    {
                        "ID": 101,
                        "TITLE": "Java: The Complete Reference",
                        "AUTHOR": "Herbert Schildt",
                        "PUBLISH_DATE": "2014-03-11",
                        "PRICE": 60,
                        "RATING": 4.5,
                        "IMAGE_URL": "image/piginIcon.PNG",
                        "REVIEWS": 27
                    }];
                this.collection = new oj.Collection();
                this.collection = new oj.Collection(data, {
//                    url: 'http://jet.us.oracle.com/1.1.1/cookbook/dataCollections/listView/filterSortListView/productData.json',
                    model: model
                });

                this.dataSource = new oj.PagingTableDataSource(new oj.CollectionTableDataSource(this.collection));

                this.currentPrice = "";
                this.currentAuthor = "";
                this.currentRating = "";
                this.currentSort = "default";
            }
            ;
            var outermodel = oj.Model.extend({
                idAttribute: 'ID'
            });
            var replaceSource = new oj.PagingTableDataSource(new oj.CollectionTableDataSource(new oj.Collection([{
                    "ID": 101,
                    "TITLE": "Java: The Complete Reference",
                    "AUTHOR": "Herbert Schildt",
                    "PUBLISH_DATE": "2014-03-11",
                    "PRICE": 60,
                    "RATING": 4.5,
                    "IMAGE_URL": "image/piginIcon.PNG",
                    "REVIEWS": 27
                }], {model: outermodel})));
            var vm = new viewModel();

            var criteriaMap = {};
            criteriaMap['lh'] = {key: 'PRICE', direction: 'ascending'};
            criteriaMap['hl'] = {key: 'PRICE', direction: 'descending'};
            criteriaMap['reviews'] = {key: 'REVIEWS', direction: 'descending'};
            criteriaMap['date'] = {key: 'PUBLISH_DATE', direction: 'ascending'};

            function handleSortCriteriaChange(event, ui)
            {
                if (ui.option != 'value')
                {
                    return;
                }

                var criteria = criteriaMap[ui.value];
                vm.dataSource.sort(criteria);
            }
            ;

            var filters = ['lt30', '30to40', '40to50', 'gt50', 'five', 'four', 'three', 'two', 'dcoward', 'jbrock', 'hschildt', 'jmanico', 'mnaftalin'];

            var filterFunc = {};
            filterFunc['lt30'] = function (model) {
                return (parseFloat(model.get('PRICE')) < 30);
            };
            filterFunc['30to40'] = function (model) {
                return (parseFloat(model.get('PRICE')) > 30 && parseFloat(model.get('PRICE')) < 40);
            };
            filterFunc['40to50'] = function (model) {
                return (parseFloat(model.get('PRICE')) >= 40 && parseFloat(model.get('PRICE')) <= 50);
            };
            filterFunc['gt50'] = function (model) {
                return (parseFloat(model.get('PRICE')) > 50);
            };

            filterFunc['five'] = function (model) {
                return (parseFloat(model.get('RATING')) == 5);
            };
            filterFunc['four'] = function (model) {
                return (parseFloat(model.get('RATING')) >= 4);
            };
            filterFunc['three'] = function (model) {
                return (parseFloat(model.get('RATING')) >= 3);
            };
            filterFunc['two'] = function (model) {
                return (parseFloat(model.get('RATING')) < 3);
            };

            filterFunc['dcoward'] = function (model) {
                return (model.get('AUTHOR').indexOf('Danny Coward') > -1);
            };
            filterFunc['jbrock'] = function (model) {
                return (model.get('AUTHOR').indexOf('John Brock') > -1);
            };
            filterFunc['jmanico'] = function (model) {
                return (model.get('AUTHOR').indexOf('Jim Manico') > -1);
            };
            filterFunc['hschildt'] = function (model) {
                return (model.get('AUTHOR').indexOf('Herbert Schildt') > -1);
            };
            filterFunc['mnaftalin'] = function (model) {
                return (model.get('AUTHOR').indexOf('Maurice Naftalin') > -1);
            };

            function handleFilterChange(event, ui)
            {
                if (ui.option != 'value')
                {
                    return;
                }

                var value = ui.value;
                if (!Array.isArray(value))
                {
                    return;
                }

                var results = [];
                var collection = vm.collection;
                var processed = false;

                $.each(filters, function (index, filter)
                {
                    if (value.indexOf(filter) > -1)
                    {
                        results = results.concat(collection.filter(filterFunc[filter]));
                        processed = true;
                    }
                });

                var complexdataSource;

                if (processed)
                {
                    var filteredCollection = new oj.Collection(results);
                    complexdataSource = new oj.PagingTableDataSource(new oj.CollectionTableDataSource(filteredCollection));
                }
                else
                {
                    complexdataSource = new oj.PagingTableDataSource(new oj.CollectionTableDataSource(collection));
                }

                $('#listview3').ojListView('option', 'data', complexdataSource);
                $('#paging').ojPagingControl('option', 'data', complexdataSource);

            }
            ;

            function AjaxModelView() {
                var self = this;
                self.triggerParserChoosePopup = function () {
                    var url = "http://localhost:8080/ShareProject/webresources/service";
                    $.ajax({
                        url: url,
                        data: null,
                        dataType: 'json',
                        complete: function (resObj) {
                            // Handle the complete event  
                            var obj = $.parseJSON( resObj.responseText );
                            alert( obj.msg);
//                            alert("get hello from service");
                        }
                    });
                }

                self.handleOpen = $("#btnParserSelect").click(function () {
                    $("#modalDialog1").ojDialog("open");
                });

                self.handleOKClose = $("#okButton").click(function () {
                    $("#modalDialog1").ojDialog("close");
                });
            }

            function PopUpDataViewModel() {
                var self = this;
                var deptArray = [{DepartmentId: 1001, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 556, DepartmentName: 'BB', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 10, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 20, DepartmentName: 'Marketing', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 30, DepartmentName: 'Purchasing', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 40, DepartmentName: 'Human Resources1', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 50, DepartmentName: 'Administration2', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 60, DepartmentName: 'Marketing3', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 70, DepartmentName: 'Purchasing4', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 80, DepartmentName: 'Human Resources5', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 90, DepartmentName: 'Human Resources11', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 100, DepartmentName: 'Administration12', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 110, DepartmentName: 'Marketing13', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 120, DepartmentName: 'Purchasing14', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 130, DepartmentName: 'Human Resources15', LocationId: 200, ManagerId: 300}];
                self.datasource = new oj.ArrayTableDataSource(deptArray, {idAttribute: 'DepartmentId'});
            }



            function ForEachViewModel() {
                var self = this;
                self.nameList = [{name: 'n1'}, {name: 'n2'}];
                self.testClick = function (data) {
                    alert('ok ' + " name=" + data.name);
                }
            }
            
            function FileUploadViewModel() {
                var self = this;
                self.uploadFile = function() {
                        var fileObj = $("#selectedFile")[0].files[0];
                        
                        var requestURL = "/emsaasui/emlacore/resources/logan-parser/autodetectParsersAllGroup";

                        var requestURL =  "http://localhost:8080/ShareProject/webresources/file";
                        // FormData
                        var form = new FormData();
                        form.append("files", fileObj);
                        var opts = {
                            url: requestURL,
                            data: form,
                            cache: false,
                            contentType: false,
                            processData: false,
                            type: 'POST',
//                            headers: reqHeaders,
                            success: self.handleQueryRecommendParserListSuccess,
                            error: self.handleQueryRecommendParserListError
                        };

                        if(form.fake) {
                            // Make sure no text encoding stuff is done by xhr
                            opts.xhr = function() { var xhr = $.ajaxSettings.xhr(); xhr.send = xhr.sendAsBinary; return xhr; }
                            opts.contentType = "multipart/form-data; boundary="+form.boundary;
                            opts.data = form.toString();
                        }
                        $.ajax(opts);
                    }
                    
                    self.handleQueryRecommendParserListSuccess = function(data){
                        alert(data.msg)
                    }
                    
                    self.handleQueryRecommendParserListError = function() { 
                        alert("file upload failure");
                    }
            }



            $(document).ready(function () {
                $('#globalBody').show();
                //bind your ViewModel for the content of whole page body.
                ko.applyBindings(new rootViewModel(), document.getElementById('mainContainer'));
                ko.applyBindings(new MsgDialogVM(), document.getElementById('messageDialogWrapper'));
                ko.applyBindings(new NotSubscribedToLaVM(), document.getElementById('ifTest'));
                ko.applyBindings(new clickTestModel(), document.getElementById('allTest'));
                ko.applyBindings(new AjaxModelView(), document.getElementById("newfeature"));
                ko.applyBindings(new PopUpDataViewModel(), document.getElementById("dialogDiv"));
                ko.applyBindings(new ForEachViewModel(), document.getElementById("testForEach"));
                ko.applyBindings(vm, document.getElementById('root'));
                ko.applyBindings(new FileUploadViewModel(), document.getElementById("uploadFileArea"));
                $('#sortBy').on('ojoptionchange', handleSortCriteriaChange);
                $('#price_filter').on('ojoptionchange', handleFilterChange);
                $('#author_filter').on('ojoptionchange', handleFilterChange);
                $('#rating_filter').on('ojoptionchange', handleFilterChange);

            });

        }
);


