define({"oj-message":{fatal:"Fatal",error:"Error",warning:"Advertencia",info:"Información",confirmation:"Confirmación","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"El valor no tiene el formato esperado.",detail:"Introduzca un valor con el formato esperado.","plural-separator":", ",hint:{summary:"Ejemplo: {exampleValue}",detail:"Introduzca un valor con el mismo formato que este ejemplo: '{exampleValue}'","detail-plural":"Introduzca un valor con el mismo formato que estos ejemplos: '{exampleValue}'"},
optionHint:{detail:"El valor aceptado para la opción '{propertyName}' es '{propertyValueValid}'.","detail-plural":"Los valores aceptados para la opción '{propertyName}' son '{propertyValueValid}'."},optionTypesMismatch:{summary:"Se necesita un valor para la opción '{requiredPropertyName}' cuando la opción '{propertyName}' se define en '{propertyValue}'."},optionTypeInvalid:{summary:"No se ha proporcionado un valor del tipo esperado para la opción '{propertyName}'."},optionOutOfRange:{summary:"El valor {propertyValue} está fuera del rango para la opción '{propertyName}'."},
optionValueInvalid:{summary:"Se ha especificado el valor no válido '{propertyValue}' para la opción '{propertyName}'."},number:{decimalFormatMismatch:{summary:"'{value}' no está en el formato numérico esperado."},decimalFormatUnsupportedParse:{summary:"decimalFormat: no están soportados 'short' y 'long' para el análisis del conversor.",detail:"Si se cambia el componente en los campos readOnly. readOnly, no se llama a la función de análisis del conversor."},currencyFormatMismatch:{summary:"'{value}' no está en el formato de moneda esperado."},
percentFormatMismatch:{summary:"'{value}' no está en el formato de porcentaje esperado."}},datetime:{datetimeOutOfRange:{summary:"El valor '{value}' está fuera del rango para '{propertyName}'.",detail:"Introduzca un valor entre '{minValue}' y '{maxValue}'."},dateFormatMismatch:{summary:"'{value}' no está en el formato de fecha esperado."},timeFormatMismatch:{summary:"'{value}' no está en el formato de hora esperado."},datetimeFormatMismatch:{summary:"'{value}' no está en el formato de fecha y hora esperado."},
dateToWeekdayMismatch:{summary:"El día '{date}' no coincide con un '{weekday}'.",detail:"Introduzca un día de la semana que coincida con la fecha."}}},"oj-validator":{length:{hint:{min:"Introduzca {min} o más caracteres.",max:"Introduzca {max} o menos caracteres",inRange:"Introduzca {min} o más caracteres, hasta un máximo de {max}.",exact:"Introduzca {length} caracteres."},messageDetail:{tooShort:"Introduzca {min} o más caracteres, no menos.",tooLong:"Introduzca {max} o menos caracteres, no más."},
messageSummary:{tooShort:"Hay muy pocos caracteres.",tooLong:"Hay demasiados caracteres."}},range:{number:{hint:{min:"Introduzca un número mayor o igual que {min}.",max:"Introduzca un número menor o igual que {max}.",inRange:"Introduzca un número entre {min} y {max}."},messageDetail:{rangeUnderflow:"El número {value} debe ser mayor o igual que {min}.",rangeOverflow:"El número {value} debe ser menor o igual que {max}."},messageSummary:{rangeUnderflow:"El número es demasiado bajo.",rangeOverflow:"El número es demasiado alto."}},
datetime:{hint:{min:"Introduzca una fecha y hora igual o posterior a {min}.",max:"Introduzca un valor de fecha y hora igual o anterior a {max}.",inRange:"Introduzca una fecha y hora entre {min} y {max}."},messageDetail:{rangeUnderflow:"La fecha y hora debe ser igual o posterior a {min}.",rangeOverflow:"La fecha y hora debe ser igual o anterior a {max}."},messageSummary:{rangeUnderflow:"El valor de fecha y hora es anterior a la fecha mínima.",rangeOverflow:"El valor de fecha y hora es posterior a la fecha máxima."}}},
restriction:{date:{messageSummary:"La fecha {value} es de una entrada desactivada.",messageDetail:"La fecha {value} no debe ser de una entrada desactivada."}},regExp:{summary:"El formato no es correcto. ",detail:"El valor '{value}' debe coincidir con este patrón: '{pattern}'"},required:{summary:"Se necesita el valor.",detail:"Debe introducir un valor."}},"oj-editableValue":{required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputDate":{prevText:"Anterior",nextText:"Siguiente",currentText:"Hoy",
weekHeader:"Semana",tooltipCalendar:"Seleccionar Fecha",tooltipCalendarDisabled:"Seleccionar Fecha Desactivada",weekText:"Semana",datePicker:"Selector de fecha",inputHelp:"Pulse la tecla arriba y la tecla abajo para acceder al calendario",inputHelpBoth:"Pulse la tecla arriba y la tecla abajo para acceder al calendario y Mayús + flecha abajo o Mayús + flecha arriba para acceder a la lista desplegable de horas",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},
messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{tooltipTime:"Seleccionar Hora",tooltipTimeDisabled:"Seleccionar Hora Desactivada",inputHelp:"Pulse la tecla abajo y la tecla arriba para acceder a la lista desplegable de horas",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{regexp:{messageSummary:"",
messageDetail:""}},"oj-ojInputPassword":{regexp:{messageDetail:"El valor debe coincidir con este patrón: '{pattern}'"}},"oj-ojFilmStrip":{labelAccArrowNextPage:"Página siguiente",labelAccArrowPreviousPage:"Página Anterior",tipArrowNextPage:"Siguiente",tipArrowPreviousPage:"Anterior"},"oj-ojDataGrid":{accessibleSortAscending:"Valores {id} ordenados en orden ascendente",accessibleSortDescending:"Valores {id} ordenados en orden descendente",accessibleActionableMode:"Entrar en modo accionable",accessibleNavigationMode:"Entrar en modo de navegación",
accessibleSummaryExact:"Es una cuadrícula de datos con {rownum} filas y {colnum} columnas",accessibleSummaryEstimate:"Es una cuadrícula de datos con un número desconocido de filas y columnas",accessibleSummaryExpanded:"Actualmente hay {num} filas ampliadas",accessibleInitialFocus:"Pulse el tabulador para enfocar en la celda actual",accessibleRowExpanded:"Fila ampliada",accessibleRowCollapsed:"Fila reducida",accessibleRowSelected:"Fila {row} seleccionada",accessibleColumnSelected:"Columna {column} seleccionada",
accessibleStateSelected:"seleccionado",accessibleMultiCellSelected:"{num} celdas seleccionadas",accessibleRowContext:"Fila {index}",accessibleColumnContext:"Columna {index}",accessibleRowHeaderContext:"Cabecera de fila {index}",accessibleColumnHeaderContext:"Cabecera de columna {index}",accessibleLevelContext:"Nivel {level}",accessibleRangeSelectModeOn:"Modo de adición de rango de celdas seleccionado activado",accessibleRangeSelectModeOff:"Modo de adición de rango de celdas seleccionado desactivado",
accessibleFirstRow:"Ha llegado a la primera fila",accessibleLastRow:"Ha llegado a la última fila",accessibleFirstColumn:"Ha llegado a la primera columna",accessibleLastColumn:"Ha llegado a la última columna",accessibleSelectionAffordanceTop:"Manejador de selección superior",accessibleSelectionAffordanceBottom:"Manejador de selección inferior",msgFetchingData:"Recuperando datos...",msgNoData:"No hay elementos para mostrar.",labelResize:"Cambiar tamaño",labelResizeWidth:"Cambiar ancho",labelResizeHeight:"Cambiar alto",
labelSortRow:"Ordenar filas",labelSortRowAsc:"Ordenar filas en forma ascendente",labelSortRowDsc:"Ordenar filas en forma descendente",labelSortCol:"Columna de Ordenación",labelSortColAsc:"Ordenar columnas en forma ascendente",labelSortColDsc:"Ordenar columnas en forma descendente",labelCut:"Cortar",labelPaste:"Pegar",labelEnableNonContiguous:"Activar selección no contigua",labelDisableNonContiguous:"Desactivar selección no contigua"},"oj-ojRowExpander":{accessibleLevelDescription:"Nivel {level}",
accessibleRowDescription:"Nivel {level}, Fila {num} de {total}",accessibleRowExpanded:"Fila ampliada",accessibleRowCollapsed:"Fila reducida",accessibleStateExpanded:"ampliado",accessibleStateCollapsed:"reducido"},"oj-ojListView":{msgFetchingData:"Recuperando datos...",msgNoData:"No hay elementos para mostrar."},"oj-_ojLabel":{tooltipHelp:"Ayuda",tooltipRequired:"Necesario"},"oj-ojInputNumber":{numberRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",
rangeOverflow:""}},tooltipDecrement:"Disminuir",tooltipIncrement:"Incrementar"},"oj-ojTable":{labelSelectRow:"Seleccionar Fila",labelSelectColumn:"Seleccionar Columna",labelSort:"Ordenar",labelSortAsc:"Orden ascendente",labelSortDsc:"Orden descendente",msgFetchingData:"Recuperando datos...",msgNoData:"No hay ningún dato que mostrar."},"oj-ojTabs":{labelCut:"Cortar",labelPasteBefore:"Pegar Delante",labelPasteAfter:"Pegar Detrás",removeCueText:"Eliminable"},"oj-ojSelect":{seachField:"Campo de búsqueda",
noMatchesFound:"No se ha encontrado ninguna coincidencia"},"oj-ojSwitch":{SwitchON:"Activado",SwitchOFF:"Desactivado"},"oj-ojTree":{stateLoading:"Cargando...",labelNewNode:"Nuevo Nodo",labelMultiSelection:"Selección Múltiple",labelEdit:"Editar",labelCreate:"Crear",labelCut:"Cortar",labelCopy:"Copiar",labelPaste:"Pegar",labelRemove:"Eliminar",labelRename:"Cambiar nombre",labelNoData:"No hay datos"},"oj-ojPagingControl":{labelAccPaging:"Paginación",labelAccNavFirstPage:"Primera página",labelAccNavLastPage:"Última Página",
labelAccNavNextPage:"Página siguiente",labelAccNavPreviousPage:"Página Anterior",labelAccNavPage:"Página",labelLoadMore:"Mostrar Más...",labelLoadMoreMaxRows:"Se ha alcanzado el límite máximo de {maxRows} filas",labelNavInputPage:"Página",labelNavInputPageMax:"de {pageMax}",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeOf:"de",msgItemRangeItems:"elementos",tipNavInputPage:"Ir a la página",tipNavPageLink:"Ir a la página {pageNum}",tipNavNextPage:"Siguiente",tipNavPreviousPage:"Anterior",tipNavFirstPage:"Primero",
tipNavLastPage:"Último",pageInvalid:{summary:"El valor de página introducido no es válido.",detail:"Introduzca un valor mayor que 0."},maxPageLinksInvalid:{summary:"El valor de maxPageLinks no es válido.",detail:"Introduzca un valor mayor que 4."}},"oj-ojMasonryLayout":{labelCut:"Cortar",labelPasteBefore:"Pegar Delante",labelPasteAfter:"Pegar Detrás"},"oj-ojChart":{labelDefaultGroupName:"Grupo {0}",labelSeries:"Serie",labelGroup:"Grupo",labelDate:"Fecha",labelValue:"Valor",labelTargetValue:"Destino",
labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Porcentaje",labelLow:"Bajo",labelHigh:"Alto",labelOpen:"Abrir",labelClose:"Cerrar",labelVolume:"Volumen",labelMin:"Mín.",labelMax:"Máx.",labelOther:"Otro",tooltipPan:"Panorámica",tooltipSelect:"Selección de Marquesina",tooltipZoom:"Zoom con Marquesina",componentName:"Gráfico"},"oj-dvtBaseGauge":{componentName:"Indicador"},"oj-ojDiagram":{componentName:"Diagrama"},"oj-ojLegend":{componentName:"Leyenda "},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Otro",
labelGroup:"Grupo",labelSize:"Tamaño",labelAdditionalData:"Datos Adicionales",componentName:"Gráfico de Nueve Celdas"},"oj-ojSparkChart":{componentName:"Gráfico"},"oj-ojSunburst":{labelColor:"Color",labelSize:"Tamaño",componentName:"Sunburst"},"oj-ojTagCloud":{componentName:"Conjunto de Etiquetas"},"oj-ojThematicMap":{componentName:"Mapa Temático"},"oj-ojTimeline":{componentName:"Línea de Tiempo",labelSeries:"Serie",tooltipZoomIn:"Ampliar",tooltipZoomOut:"Reducir"},"oj-ojTreemap":{labelColor:"Color",
labelSize:"Tamaño",tooltipIsolate:"Aislar",tooltipRestore:"Restaurar",componentName:"Mapa de Árbol"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"B",labelScalingSuffixTrillion:"T",labelScalingSuffixQuadrillion:"Q",labelInvalidData:"Datos no válidos",labelNoData:"No hay datos que mostrar",labelClearSelection:"Borrar Selección",labelDataVisualization:"Visualización de Datos",messageNotReadyToRender:{summary:"Este componente debe asociarse a un subárbol visible de DOM antes de la presentación."},
stateSelected:"Seleccionado",stateUnselected:"No seleccionado",stateMaximized:"Maximizado",stateMinimized:"Minimizado",stateExpanded:"Ampliado",stateCollapsed:"Reducido",stateIsolated:"Aislado",stateHidden:"Oculto",stateVisible:"Visible",labelAndValue:"{0}: {1}"},"oj-ojNavigationList":{defaultRootLabel:"Lista de Navegación",hierMenuBtnLabel:"Botón de menú jerárquico",selectedLabel:"seleccionado",previousIcon:"Anterior",msgFetchingData:"Recuperando datos...",msgNoData:"No hay elementos para mostrar."},
"oj-ojSlider":{noValue:"ojSlider no tiene ningún valor",maxMin:"El valor máximo no puede ser inferior al valor mínimo",valueRange:"El valor debe estar en el rango de mínimo a máximo",optionNum:"la opción {option} no es un número",invalidStep:"Paso no válido; el paso debe ser > 0"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Ventana emergente de entrada. Pulse F6 para cambiar entre la ventana emergente y el control asociado.",ariaLiveRegionInitialFocusNone:"Ventana emergente abierta. Pulse F6 para cambiar entre la ventana emergente y el control asociado.",
ariaLiveRegionInitialFocusFirstFocusableTouch:"Ventana emergente. Para cerrarla, vaya al último enlace de la ventana emergente.",ariaLiveRegionInitialFocusNoneTouch:"Ventana emergente abierta. Vaya al siguiente enlace para centrarse en la ventana emergente.",ariaFocusSkipLink:"Toque dos veces para ir a la ventana emergente abierta.",ariaCloseSkipLink:"Toque dos veces para cerrar la ventana emergente abierta."},"oj-ojMenu":{ariaLiveRegionInitialFocusMenuTouch:"Entrando en menú. El menú se puede cerrar sin seleccionar ninguna opción de menú navegando al enlace que sigue al menú.",
ariaLiveRegionInitialFocusNoneTouch:"Menú abierto. Vaya al siguiente enlace para centrarse en el menú.","ariaPreceding Link":"Continúe para llegar al menú abierto.",ariaFocusSkipLink:"Toque dos veces para ir al menú abierto.",ariaCloseSkipLink:"Toque dos veces para cerrar el menú abierto."}});