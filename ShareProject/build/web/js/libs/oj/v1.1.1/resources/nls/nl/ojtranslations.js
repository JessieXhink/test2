define({"oj-message":{fatal:"Fataal",error:"Fout",warning:"Waarschuwing",info:"Info",confirmation:"Bevestiging","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"De waarde heeft niet de verwachte notatie.",detail:"Voer een waarde in met de verwachte notatie.","plural-separator":", ",hint:{summary:"Voorbeeld: {exampleValue}",detail:"Voer een waarde in met dezelfde notatie als dit voorbeeld: '{exampleValue}'.","detail-plural":"Voer een waarde in met dezelfde notatie als deze voorbeelden: '{exampleValue}'."},
optionHint:{detail:"Een geaccepteerde waarde voor de optie '{propertyName}' is '{propertyValueValid}'.","detail-plural":"Geaccepteerde waarden voor de optie '{propertyName}' zijn '{propertyValueValid}'."},optionTypesMismatch:{summary:"Er is een waarde vereist voor de optie '{requiredPropertyName}' als de optie '{propertyName}' is ingesteld op '{propertyValue}'."},optionTypeInvalid:{summary:"Er is geen waarde van het verwachte type opgegeven voor de optie '{propertyName}'."},optionOutOfRange:{summary:"De waarde {propertyValue} is buiten het bereik voor de optie '{propertyName}'."},
optionValueInvalid:{summary:"Een ongeldige waarde, '{propertyValue}', is opgegeven voor de optie '{propertyName}'."},number:{decimalFormatMismatch:{summary:"'{value}' heeft niet de verwachte getalnotatie."},decimalFormatUnsupportedParse:{summary:"decimalFormat: 'short' en 'long' worden niet ondersteund voor ontleding door de converter.",detail:"Wijzig component in readOnly. Met readOnly-velden wordt de ontleedfunctie van de converter niet aangeroepen."},currencyFormatMismatch:{summary:"'{value}' heeft niet de verwachte valutanotatie."},
percentFormatMismatch:{summary:"'{value}' heeft niet de verwachte percentagenotatie."}},datetime:{datetimeOutOfRange:{summary:"De waarde {value} is buiten het bereik voor '{propertyName}'.",detail:"Voer een waarde in tussen '{minValue}' en '{maxValue}'."},dateFormatMismatch:{summary:"'{value}' heeft niet de verwachte datumnotatie."},timeFormatMismatch:{summary:"'{value}' heeft niet de verwachte tijdnotatie."},datetimeFormatMismatch:{summary:"'{value}' heeft niet de verwachte datum- en tijdnotatie."},
dateToWeekdayMismatch:{summary:"Dag '{date}' valt niet op een '{weekday}'.",detail:"Voer een weekdag in die overeenkomt met de datum."}}},"oj-validator":{length:{hint:{min:"Voer {min} of meer tekens in.",max:"Voer {max} of minder tekens in.",inRange:"Voer {min} of meer tekens in, tot maximaal {max}.",exact:"Voer {length} tekens in."},messageDetail:{tooShort:"Voer {min} of meer tekens in, niet minder.",tooLong:"Voer {max} of minder tekens in, niet meer."},messageSummary:{tooShort:"Er zijn te weinig tekens.",
tooLong:"Er zijn te veel tekens."}},range:{number:{hint:{min:"Voer een getal in dat groter is dan of gelijk is aan {min}.",max:"Voer een getal in dat kleiner is dan of gelijk is aan {max}.",inRange:"Voer een getal tussen {min} en {max} in."},messageDetail:{rangeUnderflow:"Het getal {value} moet groter zijn dan of gelijk zijn aan {min}.",rangeOverflow:"Het getal {value} moet kleiner zijn dan of gelijk zijn aan {max}."},messageSummary:{rangeUnderflow:"Getal is te laag.",rangeOverflow:"Getal is te hoog."}},
datetime:{hint:{min:"Voer een datum en tijd op of na {min} in.",max:"Voer een datum en tijd op of voor {max} in.",inRange:"Voer een datum en tijd tussen {min} en {max} in."},messageDetail:{rangeUnderflow:"De datum en tijd moeten op {min} of later zijn.",rangeOverflow:"De datum en tijd moeten op {max} of eerder zijn."},messageSummary:{rangeUnderflow:"De datum en tijd is eerder dan de minimumdatum.",rangeOverflow:"De datum en tijd is later dan de maximumdatum."}}},restriction:{date:{messageSummary:"De datum {value} is van een inactief item.",
messageDetail:"De datum {value} mag niet van een inactief item zijn."}},regExp:{summary:"De notatie is onjuist.",detail:"De waarde '{value}' moet overeenkomen met dit patroon: '{pattern}'"},required:{summary:"Waarde is vereist.",detail:"U moet een waarde invoeren."}},"oj-editableValue":{required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputDate":{prevText:"Vorige",nextText:"Volgende",currentText:"Vandaag",weekHeader:"Week",tooltipCalendar:"Datum selecteren",tooltipCalendarDisabled:"Datum selecteren inactief",
weekText:"Week",datePicker:"Datumkiezer",inputHelp:"Druk op de pijl omlaag of pijl omhoog om de kalender te openen.",inputHelpBoth:"Druk op de pijl omlaag of pijl omhoog om de kalender te openen, en op Shift+pijl omlaag of Shift+pijl omhoog om de tijddropdown te openen.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{tooltipTime:"Tijd selecteren",
tooltipTimeDisabled:"Tijd selecteren inactief",inputHelp:"Druk op de pijl omlaag of pijl omhoog om de tijddropdown te openen.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{regexp:{messageSummary:"",messageDetail:""}},"oj-ojInputPassword":{regexp:{messageDetail:"De waarde moet overeenkomen met dit patroon: '{pattern}'"}},"oj-ojFilmStrip":{labelAccArrowNextPage:"Volgende pagina",
labelAccArrowPreviousPage:"Vorige pagina",tipArrowNextPage:"Volgende",tipArrowPreviousPage:"Vorige"},"oj-ojDataGrid":{accessibleSortAscending:"{id} gesorteerd in oplopende volgorde",accessibleSortDescending:"{id} gesorteerd in aflopende volgorde",accessibleActionableMode:"Naar actiemodus",accessibleNavigationMode:"Naar navigatiemodus",accessibleSummaryExact:"Dit is een gegevensraster met {rownum} rijen en {colnum} kolommen.",accessibleSummaryEstimate:"Dit is een gegevensraster met een onbekend aantal rijen en kolommen.",
accessibleSummaryExpanded:"Er zijn momenteel {num} rijen uitgevouwen.",accessibleInitialFocus:"Druk op de tabtoets om de focus naar de huidige cel te verplaatsen.",accessibleRowExpanded:"Rij uitgevouwen",accessibleRowCollapsed:"Rij samengevouwen",accessibleRowSelected:"Rij {row} geselecteerd",accessibleColumnSelected:"Kolom {column} geselecteerd",accessibleStateSelected:"geselecteerd",accessibleMultiCellSelected:"{num} cellen geselecteerd",accessibleRowContext:"Rij {index}",accessibleColumnContext:"Kolom {index}",
accessibleRowHeaderContext:"Rijkoptekst {index}",accessibleColumnHeaderContext:"Kolomkoprij {index}",accessibleLevelContext:"Niveau {level}",accessibleRangeSelectModeOn:"Modus voor toevoegen van geselecteerd cellenbereik aan",accessibleRangeSelectModeOff:"Modus voor toevoegen van geselecteerd cellenbereik uit",accessibleFirstRow:"U hebt de eerste rij bereikt.",accessibleLastRow:"U hebt de laatste rij bereikt.",accessibleFirstColumn:"U hebt de eerste kolom bereikt.",accessibleLastColumn:"U hebt de laatste kolom bereikt.",
accessibleSelectionAffordanceTop:"Bovenste selectiegreep",accessibleSelectionAffordanceBottom:"Onderste selectiegreep",msgFetchingData:"Gegevens worden opgehaald...",msgNoData:"Geen items om weer te geven",labelResize:"Grootte wijzigen",labelResizeWidth:"Breedte wijzigen",labelResizeHeight:"Hoogte wijzigen",labelSortRow:"Rij sorteren",labelSortRowAsc:"Rij oplopend sorteren",labelSortRowDsc:"Rij aflopend sorteren",labelSortCol:"Kolom sorteren",labelSortColAsc:"Kolom oplopend sorteren",labelSortColDsc:"Kolom aflopend sorteren",
labelCut:"Knippen",labelPaste:"Plakken",labelEnableNonContiguous:"Niet-aaneengesloten selectie activeren",labelDisableNonContiguous:"Niet-aaneengesloten selectie deactiveren"},"oj-ojRowExpander":{accessibleLevelDescription:"Niveau {level}",accessibleRowDescription:"Niveau {level}, rij {num} van {total}",accessibleRowExpanded:"Rij uitgevouwen",accessibleRowCollapsed:"Rij samengevouwen",accessibleStateExpanded:"uitgevouwen",accessibleStateCollapsed:"samengevouwen"},"oj-ojListView":{msgFetchingData:"Gegevens worden opgehaald...",
msgNoData:"Geen items om weer te geven"},"oj-_ojLabel":{tooltipHelp:"Help",tooltipRequired:"Vereist"},"oj-ojInputNumber":{numberRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Verlagen",tooltipIncrement:"Verhogen"},"oj-ojTable":{labelSelectRow:"Rij selecteren",labelSelectColumn:"Kolom selecteren",labelSort:"Sorteren",labelSortAsc:"Oplopend sorteren",labelSortDsc:"Aflopend sorteren",msgFetchingData:"Gegevens worden opgehaald...",
msgNoData:"Er zijn geen gegevens om weer te geven."},"oj-ojTabs":{labelCut:"Knippen",labelPasteBefore:"Plakken vóór",labelPasteAfter:"Plakken achter",removeCueText:"Verwijderbaar"},"oj-ojSelect":{seachField:"Zoekveld",noMatchesFound:"Geen treffers gevonden."},"oj-ojSwitch":{SwitchON:"Aan",SwitchOFF:"Uit"},"oj-ojTree":{stateLoading:"Bezig met laden...",labelNewNode:"Nieuwe node",labelMultiSelection:"Meerdere selecties",labelEdit:"Bewerken",labelCreate:"Maken",labelCut:"Knippen",labelCopy:"Kopiëren",
labelPaste:"Plakken",labelRemove:"Verwijderen",labelRename:"Hernoemen",labelNoData:"Geen gegevens"},"oj-ojPagingControl":{labelAccPaging:"Paginering",labelAccNavFirstPage:"Eerste pagina",labelAccNavLastPage:"Laatste pagina",labelAccNavNextPage:"Volgende pagina",labelAccNavPreviousPage:"Vorige pagina",labelAccNavPage:"Pagina",labelLoadMore:"Meer tonen...",labelLoadMoreMaxRows:"Maximumlimiet van {maxRows} rijen bereikt",labelNavInputPage:"Pagina",labelNavInputPageMax:"van {pageMax}",msgItemRangeCurrent:"{pageFrom}-{pageTo}",
msgItemRangeOf:"van",msgItemRangeItems:"items",tipNavInputPage:"Ga naar pagina",tipNavPageLink:"Ga naar pagina {pageNum}",tipNavNextPage:"Volgende",tipNavPreviousPage:"Vorige",tipNavFirstPage:"Eerste",tipNavLastPage:"Laatste",pageInvalid:{summary:"De ingevoerde paginawaarde is ongeldig.",detail:"Voer een waarde groter dan 0 in."},maxPageLinksInvalid:{summary:"De waarde voor maxPageLinks is ongeldig.",detail:"Voer een waarde groter dan 4 in."}},"oj-ojMasonryLayout":{labelCut:"Knippen",labelPasteBefore:"Plakken vóór",
labelPasteAfter:"Plakken achter"},"oj-ojChart":{labelDefaultGroupName:"Groep {0}",labelSeries:"Reeks",labelGroup:"Groep",labelDate:"Datum",labelValue:"Waarde",labelTargetValue:"Doel",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Percentage",labelLow:"Laag",labelHigh:"Hoog",labelOpen:"Openen",labelClose:"Sluiten",labelVolume:"Volume",labelMin:"Min.",labelMax:"Max.",labelOther:"Overig",tooltipPan:"Schuiven",tooltipSelect:"Selecteren marquee",tooltipZoom:"Zoomen marquee",componentName:"Grafiek"},
"oj-dvtBaseGauge":{componentName:"Datameter"},"oj-ojDiagram":{componentName:"Diagram"},"oj-ojLegend":{componentName:"Legenda"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Overig",labelGroup:"Groep",labelSize:"Grootte",labelAdditionalData:"Aanvullende gegevens",componentName:"NBox"},"oj-ojSparkChart":{componentName:"Grafiek"},"oj-ojSunburst":{labelColor:"Kleur",labelSize:"Grootte",componentName:"Ringdiagram"},"oj-ojTagCloud":{componentName:"Tagwolk"},"oj-ojThematicMap":{componentName:"Thematische kaart"},
"oj-ojTimeline":{componentName:"Tijdlijn",labelSeries:"Reeks",tooltipZoomIn:"Inzoomen",tooltipZoomOut:"Uitzoomen"},"oj-ojTreemap":{labelColor:"Kleur",labelSize:"Grootte",tooltipIsolate:"Isoleren",tooltipRestore:"Herstellen",componentName:"Boomstructuurkaart"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"mln",labelScalingSuffixBillion:"mld",labelScalingSuffixTrillion:"bln",labelScalingSuffixQuadrillion:"bld",labelInvalidData:"Ongeldige gegevens",labelNoData:"Er zijn geen gegevens om weer te geven.",
labelClearSelection:"Selectie wissen",labelDataVisualization:"Visualisatie van gegevens",messageNotReadyToRender:{summary:"Deze component moet vóór weergave aan een zichtbare substructuur van de DOM worden gekoppeld."},stateSelected:"Geselecteerd",stateUnselected:"Niet geselecteerd",stateMaximized:"Gemaximaliseerd",stateMinimized:"Geminimaliseerd",stateExpanded:"Uitgevouwen",stateCollapsed:"Samengevouwen",stateIsolated:"Geïsoleerd",stateHidden:"Verborgen",stateVisible:"Zichtbaar",labelAndValue:"{0}: {1}"},
"oj-ojNavigationList":{defaultRootLabel:"Navigatielijst",hierMenuBtnLabel:"Knop hiërarchisch menu",selectedLabel:"geselecteerd",previousIcon:"Vorige",msgFetchingData:"Gegevens worden opgehaald...",msgNoData:"Geen items om weer te geven"},"oj-ojSlider":{noValue:"ojSlider heeft geen waarde.",maxMin:"Max. mag niet minder zijn dan Min.",valueRange:"Waarde moet binnen het bereik tussen Min. en Max. liggen.",optionNum:"{option} optie is geen getal.",invalidStep:"Stap is ongeldig. Stap moet > 0 zijn."},
"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Pop-up wordt geopend. Druk op F6 om tussen de pop-up en het bijbehorende besturingselement te navigeren.",ariaLiveRegionInitialFocusNone:"Pop-up is geopend. Druk op F6 om tussen de pop-up en het bijbehorende besturingselement te navigeren.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Pop-up wordt geopend. De pop-up kan worden gesloten door naar de laatste koppeling in de pop-up te navigeren.",ariaLiveRegionInitialFocusNoneTouch:"Pop-up is geopend. Navigeer naar de volgende koppeling om de pop-up de focus te geven.",
ariaFocusSkipLink:"Dubbeltik om naar de open pop-up te navigeren.",ariaCloseSkipLink:"Dubbeltik om de open pop-up te sluiten."},"oj-ojMenu":{ariaLiveRegionInitialFocusMenuTouch:"Menu wordt geopend. Menu kan worden gesloten zonder een menu-item te selecteren door naar de koppeling na het menu te navigeren.",ariaLiveRegionInitialFocusNoneTouch:"Menu is geopend. Navigeer naar de volgende koppeling om het menu de focus te geven.","ariaPreceding Link":"Navigeer vooruit om in het open menu te komen.",ariaFocusSkipLink:"Dubbeltik om naar het open menu te navigeren.",
ariaCloseSkipLink:"Dubbeltik om het open menu te sluiten."}});