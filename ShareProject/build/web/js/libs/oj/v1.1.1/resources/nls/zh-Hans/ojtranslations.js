define({"oj-message":{fatal:"致命",error:"错误",warning:"警告",info:"信息",confirmation:"确认","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"值不是预期的格式。",detail:"请按预期格式输入值。","plural-separator":", ",hint:{summary:"示例: {exampleValue}",detail:"请按与此示例相同的格式输入值: '{exampleValue}'","detail-plural":"请按与这些示例相同的格式输入值: '{exampleValue}'"},optionHint:{detail:"选项 '{propertyName}' 可接受的值为 '{propertyValueValid}'。","detail-plural":"选项 '{propertyName}' 可接受的值为 '{propertyValueValid}'。"},optionTypesMismatch:{summary:"当选项 '{propertyName}' 设置为 '{propertyValue}' 时, 选项 '{requiredPropertyName}' 必须具有值。"},
optionTypeInvalid:{summary:"没有为选项 '{propertyName}' 提供预期类型的值。"},optionOutOfRange:{summary:"选项 '{propertyName}' 的值 {propertyValue} 超出范围。"},optionValueInvalid:{summary:"为选项 '{propertyName}' 指定的值 '{propertyValue}' 无效。"},number:{decimalFormatMismatch:{summary:"'{value}' 不是预期的数字格式。"},decimalFormatUnsupportedParse:{summary:"decimalFormat: 'short' and 'long' 不受转换程序语法分析支持。",detail:"将组件更改为 readOnly。readOnly 字段不调用转换程序的语法分析函数。"},currencyFormatMismatch:{summary:"'{value}' 不是预期的货币格式。"},percentFormatMismatch:{summary:"'{value}' 不是预期的百分比格式。"}},
datetime:{datetimeOutOfRange:{summary:"对于 '{propertyName}', 值 '{value}' 超出了范围。",detail:"请输入介于 '{minValue}' 与 '{maxValue}' 之间的值。"},dateFormatMismatch:{summary:"'{value}' 不是预期的日期格式。"},timeFormatMismatch:{summary:"'{value}' 不是预期的时间格式。"},datetimeFormatMismatch:{summary:"'{value}' 不是预期的日期时间格式。"},dateToWeekdayMismatch:{summary:"日期 '{date}' 不在 '{weekday}' 的范围内。",detail:"请输入与日期对应的工作日。"}}},"oj-validator":{length:{hint:{min:"请输入 {min} 个或更多的字符。",max:"请输入 {max} 个或更少的字符",inRange:"请输入 {min} 个或更多的字符, 最多 {max} 个。",
exact:"请输入 {length} 个字符。"},messageDetail:{tooShort:"请输入 {min} 个或更多的字符, 不能更少。",tooLong:"请输入 {max} 个或更少的字符, 不能更多。"},messageSummary:{tooShort:"字符太少。",tooLong:"字符太多。"}},range:{number:{hint:{min:"请输入大于等于 {min} 的数字。",max:"请输入小于等于 {max} 的数字。",inRange:"请输入介于 {min} 与 {max} 之间的数字。"},messageDetail:{rangeUnderflow:"数字 {value} 必须大于等于 {min}。",rangeOverflow:"数字 {value} 必须小于等于 {max}。"},messageSummary:{rangeUnderflow:"数字太小。",rangeOverflow:"数字太大。"}},datetime:{hint:{min:"请输入等于或晚于 {min} 的日期时间。",max:"请输入等于或早于 {max} 的日期时间。",
inRange:"请输入介于 {min} 与 {max} 之间的日期时间。"},messageDetail:{rangeUnderflow:"日期时间必须等于或晚于 {min}。",rangeOverflow:"日期时间必须等于或早于 {max}。"},messageSummary:{rangeUnderflow:"日期时间早于最早日期。",rangeOverflow:"日期时间晚于最晚日期。"}}},restriction:{date:{messageSummary:"日期 {value} 属于已禁用条目。",messageDetail:"日期 {value} 不应属于已禁用条目。"}},regExp:{summary:"格式不正确。 ",detail:"值 '{value}' 必须匹配此模式: '{pattern}'"},required:{summary:"需要提供值。",detail:"必须输入一个值。"}},"oj-editableValue":{required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputDate":{prevText:"上一个",
nextText:"下一个",currentText:"今天",weekHeader:"周",tooltipCalendar:"选择日期",tooltipCalendarDisabled:"选择日期已禁用",weekText:"周",datePicker:"日期选择器",inputHelp:"按下箭头或上箭头来访问日历",inputHelpBoth:"按下箭头或上箭头来访问日历, 按 Shift + 下箭头或 Shift + 上箭头来访问时间下拉列表",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{tooltipTime:"选择时间",tooltipTimeDisabled:"选择时间已禁用",
inputHelp:"按下箭头或上箭头来访问时间下拉列表",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{regexp:{messageSummary:"",messageDetail:""}},"oj-ojInputPassword":{regexp:{messageDetail:"值必须匹配此模式: '{pattern}'"}},"oj-ojFilmStrip":{labelAccArrowNextPage:"下一页",labelAccArrowPreviousPage:"上一页",tipArrowNextPage:"下一页",tipArrowPreviousPage:"上一页"},"oj-ojDataGrid":{accessibleSortAscending:"以升序排序的 {id}",accessibleSortDescending:"{id} 以降序排序",
accessibleActionableMode:"进入可操作模式",accessibleNavigationMode:"进入导航模式",accessibleSummaryExact:"这是一个数据网格, 包含 {rownum} 行和 {colnum} 列",accessibleSummaryEstimate:"这是一个数据网格, 行数和列数未知",accessibleSummaryExpanded:"当前展开了 {num} 行",accessibleInitialFocus:"按选项卡可使焦点位于当前单元格",accessibleRowExpanded:"已展开行",accessibleRowCollapsed:"已折叠行",accessibleRowSelected:"已选择行 {row}",accessibleColumnSelected:"已选择列 {column}",accessibleStateSelected:"选定",accessibleMultiCellSelected:"选定了 {num} 个单元",accessibleRowContext:"行 {index}",accessibleColumnContext:"列 {index}",
accessibleRowHeaderContext:"行标题 {index}",accessibleColumnHeaderContext:"列标题 {index}",accessibleLevelContext:"级别 {level}",accessibleRangeSelectModeOn:"添加选定范围的单元格模式打开",accessibleRangeSelectModeOff:"添加选定范围的单元格模式关闭",accessibleFirstRow:"您已到达第一行",accessibleLastRow:"您已到达最后一行",accessibleFirstColumn:"您已到达第一列",accessibleLastColumn:"您已到达最后一列",accessibleSelectionAffordanceTop:"顶部选择句柄",accessibleSelectionAffordanceBottom:"底部选择句柄",msgFetchingData:"正在提取数据...",msgNoData:"没有可显示的项。",labelResize:"调整大小",labelResizeWidth:"调整宽度",
labelResizeHeight:"调整高度",labelSortRow:"排序行",labelSortRowAsc:"升序排序行",labelSortRowDsc:"降序排序行",labelSortCol:"排序列",labelSortColAsc:"升序排序列",labelSortColDsc:"降序排序列",labelCut:"剪切",labelPaste:"粘贴",labelEnableNonContiguous:"启用非连续选择",labelDisableNonContiguous:"禁用非连续选择"},"oj-ojRowExpander":{accessibleLevelDescription:"级别 {level}",accessibleRowDescription:"级别 {level}, 第 {num} 行, 共 {total} 行",accessibleRowExpanded:"已展开行",accessibleRowCollapsed:"已折叠行",accessibleStateExpanded:"已展开",accessibleStateCollapsed:"已隐藏"},
"oj-ojListView":{msgFetchingData:"正在提取数据...",msgNoData:"没有可显示的项。"},"oj-_ojLabel":{tooltipHelp:"帮助",tooltipRequired:"必需"},"oj-ojInputNumber":{numberRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"减少",tooltipIncrement:"增加"},"oj-ojTable":{labelSelectRow:"选择行",labelSelectColumn:"选择列",labelSort:"排序",labelSortAsc:"升序排序",labelSortDsc:"降序排序",msgFetchingData:"正在提取数据...",msgNoData:"没有可显示的数据。"},"oj-ojTabs":{labelCut:"剪切",
labelPasteBefore:"前置粘贴",labelPasteAfter:"后置粘贴",removeCueText:"可删除"},"oj-ojSelect":{seachField:"搜索字段",noMatchesFound:"找不到匹配项"},"oj-ojSwitch":{SwitchON:"启用",SwitchOFF:"禁用"},"oj-ojTree":{stateLoading:"正在加载...",labelNewNode:"新建节点",labelMultiSelection:"多选",labelEdit:"编辑",labelCreate:"创建",labelCut:"剪切",labelCopy:"复制",labelPaste:"粘贴",labelRemove:"删除",labelRename:"重命名",labelNoData:"无数据"},"oj-ojPagingControl":{labelAccPaging:"页码",labelAccNavFirstPage:"第一页",labelAccNavLastPage:"最后一页",labelAccNavNextPage:"下一页",
labelAccNavPreviousPage:"上一页",labelAccNavPage:"页码",labelLoadMore:"显示更多...",labelLoadMoreMaxRows:"已达到最大行数限制 {maxRows}",labelNavInputPage:"第",labelNavInputPageMax:"页, 共 {pageMax} 页",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeOf:"/",msgItemRangeItems:"项",tipNavInputPage:"转至页",tipNavPageLink:"转至页 {pageNum}",tipNavNextPage:"下一页",tipNavPreviousPage:"上一页",tipNavFirstPage:"第一页",tipNavLastPage:"最后一页",pageInvalid:{summary:"输入的页值无效。",detail:"请输入一个大于 0 的值。"},maxPageLinksInvalid:{summary:"maxPageLinks 的值无效。",
detail:"请输入一个大于 4 的值。"}},"oj-ojMasonryLayout":{labelCut:"剪切",labelPasteBefore:"前置粘贴",labelPasteAfter:"后置粘贴"},"oj-ojChart":{labelDefaultGroupName:"组 {0}",labelSeries:"系列",labelGroup:"组",labelDate:"日期",labelValue:"值",labelTargetValue:"目标",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"百分比",labelLow:"低",labelHigh:"高",labelOpen:"打开",labelClose:"关闭",labelVolume:"卷",labelMin:"最小值",labelMax:"最大值",labelOther:"其他",tooltipPan:"平移",tooltipSelect:"选取框选择",tooltipZoom:"选取框缩放",componentName:"图表"},"oj-dvtBaseGauge":{componentName:"计量表"},
"oj-ojDiagram":{componentName:"图示"},"oj-ojLegend":{componentName:"图例"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"其他",labelGroup:"组",labelSize:"大小",labelAdditionalData:"附加数据",componentName:"方框图"},"oj-ojSparkChart":{componentName:"图表"},"oj-ojSunburst":{labelColor:"颜色",labelSize:"大小",componentName:"旭日图"},"oj-ojTagCloud":{componentName:"标记云"},"oj-ojThematicMap":{componentName:"主题地图"},"oj-ojTimeline":{componentName:"时间表",labelSeries:"系列",tooltipZoomIn:"放大",tooltipZoomOut:"缩小"},"oj-ojTreemap":{labelColor:"颜色",
labelSize:"大小",tooltipIsolate:"隔离",tooltipRestore:"还原",componentName:"树状图"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"B",labelScalingSuffixTrillion:"T",labelScalingSuffixQuadrillion:"Q",labelInvalidData:"数据无效",labelNoData:"没有可显示的数据",labelClearSelection:"清除选择",labelDataVisualization:"数据可视化",messageNotReadyToRender:{summary:"此组件必须先连接到 DOM 的可见子树, 然后才能呈现。"},stateSelected:"选定",stateUnselected:"未选定",stateMaximized:"最大化",stateMinimized:"最小化",
stateExpanded:"展开",stateCollapsed:"折叠",stateIsolated:"隔离",stateHidden:"隐藏",stateVisible:"可见",labelAndValue:"{0}: {1}"},"oj-ojNavigationList":{defaultRootLabel:"导航列表",hierMenuBtnLabel:"分层菜单按钮",selectedLabel:"选定",previousIcon:"上一页",msgFetchingData:"正在提取数据...",msgNoData:"没有可显示的项。"},"oj-ojSlider":{noValue:"ojSlider 没有值",maxMin:"最大值不得小于最小值",valueRange:"值必须在最小值和最大值界定的范围内",optionNum:"{option} 选项不是数字",invalidStep:"步骤无效; 步骤必须大于 0"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"正在进入弹出式窗口。按 F6 可在弹出式窗口和相关控件之间导航。",
ariaLiveRegionInitialFocusNone:"弹出式窗口已打开。按 F6 可在弹出式窗口和相关控件之间导航。",ariaLiveRegionInitialFocusFirstFocusableTouch:"正在进入弹出式窗口。通过导航到弹出式窗口中的最后一个链接可关闭弹出式窗口。",ariaLiveRegionInitialFocusNoneTouch:"弹出式窗口已打开。导航到下一个链接以在弹出式窗口中建立焦点。",ariaFocusSkipLink:"双击以导航到打开的弹出式窗口。",ariaCloseSkipLink:"双击以关闭打开的弹出式窗口。"},"oj-ojMenu":{ariaLiveRegionInitialFocusMenuTouch:"正在进入菜单。通过导航到菜单后面的链接, 可以在不选择菜单项的情况下关闭菜单。",ariaLiveRegionInitialFocusNoneTouch:"菜单已打开。导航到下一个链接以在菜单中建立焦点。","ariaPreceding Link":"向前导航以到达打开的菜单。",ariaFocusSkipLink:"双击以导航到打开的菜单。",
ariaCloseSkipLink:"双击以关闭打开的菜单。"}});