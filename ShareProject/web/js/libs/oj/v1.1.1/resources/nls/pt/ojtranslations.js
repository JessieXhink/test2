define({"oj-message":{fatal:"Fatal",error:"Erro",warning:"Advertência",info:"Informações",confirmation:"Confirmação","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"O valor não está no formato esperado.",detail:"Informe um valor no formato esperado.","plural-separator":", ",hint:{summary:"Exemplo: {exampleValue}",detail:"Informe um valor no mesmo formato, conforme este exemplo: '{exampleValue}'","detail-plural":"Informe um valor no mesmo formato, conforme estes exemplos: '{exampleValue}'"},
optionHint:{detail:"Um valor aceito para a opção '{propertyName}' é '{propertyValueValid}'.","detail-plural":"Os valores aceitos para a opção '{propertyName}' são '{propertyValueValid}'."},optionTypesMismatch:{summary:"Um valor para a opção '{requiredPropertyName}' é obrigatório quando a opção '{propertyName}' está definida como '{propertyValue}'."},optionTypeInvalid:{summary:"Um valor do tipo esperado não foi fornecido para a opção '{propertyName}'."},optionOutOfRange:{summary:"O valor {propertyValue} está fora da faixa da opção '{propertyName}'."},
optionValueInvalid:{summary:"Um valor inválido '{propertyValue}' foi especificado para a opção '{propertyName}'."},number:{decimalFormatMismatch:{summary:"'{value}' não está no formato numérico esperado."},decimalFormatUnsupportedParse:{summary:"decimalFormat: 'short' e 'long' não são suportados para parsing do conversor.",detail:"Altere o componente para readOnly. Os campos readOnly não chamam a função de parsing do conversor."},currencyFormatMismatch:{summary:"'{value}' não está no formato de moeda esperado."},
percentFormatMismatch:{summary:"'{value}' não está no formato de percentual esperado."}},datetime:{datetimeOutOfRange:{summary:"O valor '{value}' está fora da faixa de '{propertyName}'.",detail:"Informe um valor entre '{minValue}' e '{maxValue}'."},dateFormatMismatch:{summary:"'{value}' não está no formato de data esperado."},timeFormatMismatch:{summary:"'{value}' não está no formato de hora esperado."},datetimeFormatMismatch:{summary:"'{value}' não está no formato de data e hora esperado."},dateToWeekdayMismatch:{summary:"O dia '{date}' não é um '{weekday}'.",
detail:"Informe um dia útil que corresponda à data."}}},"oj-validator":{length:{hint:{min:"Informe {min} ou mais caracteres.",max:"Informe {max}caracteres ou menos",inRange:"Informe {min} ou mais caracteres; no máximo {max}.",exact:"Informe {length} caracteres."},messageDetail:{tooShort:"Informe {min} ou mais caracteres, não menos.",tooLong:"Informe {max} ou menos caracteres, não mais."},messageSummary:{tooShort:"Há poucos caracteres.",tooLong:"Há muitos caracteres."}},range:{number:{hint:{min:"Informe um número maior ou igual a {min}.",
max:"Informe um número menor ou igual a {max}.",inRange:"Informe um número entre {min} e {max}."},messageDetail:{rangeUnderflow:"O número {value} deve ser maior ou igual a {min}.",rangeOverflow:"O número {value} deve ser menor ou igual a {max}."},messageSummary:{rangeUnderflow:"O número é muito baixo.",rangeOverflow:"O número é muito alto."}},datetime:{hint:{min:"Informe uma data e uma hora iguais ou posteriores a {min}.",max:"Informe uma data e uma hora iguais ou anteriores a {max}.",inRange:"Informe uma data e uma hora entre {min} e {max}."},
messageDetail:{rangeUnderflow:"Data e hora devem ser iguais ou posteriores a {min}.",rangeOverflow:"Data e hora devem ser iguais ou anteriores a {max}."},messageSummary:{rangeUnderflow:"Data e hora são anteriores à data mínima.",rangeOverflow:"Data e hora são posteriores à data máxima."}}},restriction:{date:{messageSummary:"A data {value} é de uma entrada desativada.",messageDetail:"A data {value} não deve ser de uma entrada desativada."}},regExp:{summary:"O formato está incorreto.",detail:"O valor '{value}' deve corresponder a este padrão: '{pattern}'"},
required:{summary:"O valor é obrigatório.",detail:"Você deverá informar um valor."}},"oj-editableValue":{required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputDate":{prevText:"Ant.",nextText:"Próximo",currentText:"Hoje",weekHeader:"Sem.",tooltipCalendar:"Selecionar Data",tooltipCalendarDisabled:"Seleção de Data Desativada",weekText:"Semana",datePicker:"Seletor de Data",inputHelp:"Pressione Seta para baixo ou Seta para cima para acessar o Calendário",inputHelpBoth:"Pressione Seta para baixo ou Seta para cima para acessar o Calendário e Shift + Seta para baixo ou Shift + Seta para cima para acessar a lista drop-down de horários",
dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{tooltipTime:"Selecionar Horário",tooltipTimeDisabled:"Seleção de Hora Desativada",inputHelp:"Pressione Seta para baixo ou Seta para cima para acessar a lista drop-down de horários",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},
messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{regexp:{messageSummary:"",messageDetail:""}},"oj-ojInputPassword":{regexp:{messageDetail:"O valor deve corresponder a este padrão: '{pattern}'"}},"oj-ojFilmStrip":{labelAccArrowNextPage:"Próxima Página",labelAccArrowPreviousPage:"Página Anterior",tipArrowNextPage:"Próximo",tipArrowPreviousPage:"Anterior"},"oj-ojDataGrid":{accessibleSortAscending:"{id} classificado(a) em ordem crescente",accessibleSortDescending:"{id} classificado em ordem decrescente",
accessibleActionableMode:"Informe o modo acionável",accessibleNavigationMode:"Informe o modo de navegação",accessibleSummaryExact:"Esta é uma grade de dados com {rownum} linhas e {colnum} colunas",accessibleSummaryEstimate:"Esta é uma grade de dados com um número desconhecido de linhas e colunas",accessibleSummaryExpanded:"Atualmente há {num} linhas expandidas",accessibleInitialFocus:"Pressione tab para focar na célula atual",accessibleRowExpanded:"Linha expandida",accessibleRowCollapsed:"Linha contraída",
accessibleRowSelected:"Linha {row} selecionada",accessibleColumnSelected:"Coluna {column} selecionada",accessibleStateSelected:"selecionado",accessibleMultiCellSelected:"{num} células selecionadas",accessibleRowContext:"Linha {index}",accessibleColumnContext:"Coluna {index}",accessibleRowHeaderContext:"Cabeçalho de Linha {index}",accessibleColumnHeaderContext:"Cabeçalho de Coluna {index}",accessibleLevelContext:"Nível {level}",accessibleRangeSelectModeOn:"Modo de adição de faixa de células selecionada ativo",
accessibleRangeSelectModeOff:"Modo de adição de faixa de células selecionada inativo",accessibleFirstRow:"Você atingiu a primeira linha",accessibleLastRow:"Você atingiu a última linha",accessibleFirstColumn:"Você atingiu a primeira coluna",accessibleLastColumn:"Você atingiu a última coluna",accessibleSelectionAffordanceTop:"Handle de seleção superior",accessibleSelectionAffordanceBottom:"Handle de seleção inferior",msgFetchingData:"Extraindo Dados...",msgNoData:"Não há itens para exibição.",labelResize:"Redimensionar",
labelResizeWidth:"Redimensionar Largura",labelResizeHeight:"Redimensionar Altura",labelSortRow:"Classificar Linha",labelSortRowAsc:"Classificar Linha em Ordem Crescente",labelSortRowDsc:"Classificar Linha em Ordem Decrescente",labelSortCol:"Classificar Coluna",labelSortColAsc:"Classificar Coluna em Ordem Crescente",labelSortColDsc:"Classificar Coluna em Ordem Decrescente",labelCut:"Recortar",labelPaste:"Colar",labelEnableNonContiguous:"Ativar Seleção Não Contígua",labelDisableNonContiguous:"Desativar Seleção Não Contígua"},
"oj-ojRowExpander":{accessibleLevelDescription:"Nível {level}",accessibleRowDescription:"Nível {level}, Linha {num} de {total}",accessibleRowExpanded:"Linha expandida",accessibleRowCollapsed:"Linha contraída",accessibleStateExpanded:"expandido",accessibleStateCollapsed:"contraído"},"oj-ojListView":{msgFetchingData:"Extraindo Dados...",msgNoData:"Não há itens para exibição."},"oj-_ojLabel":{tooltipHelp:"Ajuda",tooltipRequired:"Obrigatório"},"oj-ojInputNumber":{numberRange:{hint:{min:"",max:"",inRange:""},
messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Reduzir",tooltipIncrement:"Incrementar"},"oj-ojTable":{labelSelectRow:"Selecionar Linha",labelSelectColumn:"Selecionar Coluna",labelSort:"Classificar",labelSortAsc:"Classificar por Ordem Crescente",labelSortDsc:"Classificar por Ordem Decrescente",msgFetchingData:"Extraindo Dados...",msgNoData:"Nenhum dado a ser exibido."},"oj-ojTabs":{labelCut:"Recortar",labelPasteBefore:"Colar Antes",
labelPasteAfter:"Colar Depois",removeCueText:"Removível"},"oj-ojSelect":{seachField:"Pesquisar campo",noMatchesFound:"Nenhuma correspondência encontrada"},"oj-ojSwitch":{SwitchON:"Ativado",SwitchOFF:"Desativado"},"oj-ojTree":{stateLoading:"Carregando...",labelNewNode:"Novo Nó",labelMultiSelection:"Seleção Múltipla",labelEdit:"Editar",labelCreate:"Criar",labelCut:"Recortar",labelCopy:"Copiar",labelPaste:"Colar",labelRemove:"Remover",labelRename:"Renomear",labelNoData:"Não há dados"},"oj-ojPagingControl":{labelAccPaging:"Paginação",
labelAccNavFirstPage:"Primeira Página",labelAccNavLastPage:"Última Página",labelAccNavNextPage:"Próxima Página",labelAccNavPreviousPage:"Página Anterior",labelAccNavPage:"Página",labelLoadMore:"Mostrar Mais...",labelLoadMoreMaxRows:"Foi Atingido o Limite Máximo de {maxRows} linhas",labelNavInputPage:"Página",labelNavInputPageMax:"de {pageMax}",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeOf:"de",msgItemRangeItems:"itens",tipNavInputPage:"Ir para Página",tipNavPageLink:"Ir para a Página {pageNum}",
tipNavNextPage:"Próximo",tipNavPreviousPage:"Anterior",tipNavFirstPage:"Primeiro",tipNavLastPage:"Último",pageInvalid:{summary:"O valor informado da página é inválido.",detail:"Informe um valor maior que 0."},maxPageLinksInvalid:{summary:"O valor de maxPageLinks é inválido.",detail:"Informe um valor maior que 4."}},"oj-ojMasonryLayout":{labelCut:"Recortar",labelPasteBefore:"Colar Antes",labelPasteAfter:"Colar Depois"},"oj-ojChart":{labelDefaultGroupName:"Grupo {0}",labelSeries:"Série",labelGroup:"Grupo",
labelDate:"Data",labelValue:"Valor",labelTargetValue:"Destino",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Porcentagem",labelLow:"Baixa",labelHigh:"Alta",labelOpen:"Abrir",labelClose:"Fechar",labelVolume:"Volume",labelMin:"Mín.",labelMax:"Máx.",labelOther:"Outros",tooltipPan:"Panorâmico",tooltipSelect:"Marcação se seleção",tooltipZoom:"Marcação de zoom",componentName:"Gráfico"},"oj-dvtBaseGauge":{componentName:"Gauge"},"oj-ojDiagram":{componentName:"Diagrama"},"oj-ojLegend":{componentName:"Legenda"},
"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Outros",labelGroup:"Grupo",labelSize:"Tamanho",labelAdditionalData:"Dados Adicionais",componentName:"NBox"},"oj-ojSparkChart":{componentName:"Gráfico"},"oj-ojSunburst":{labelColor:"Cor",labelSize:"Tamanho",componentName:"Sunburst"},"oj-ojTagCloud":{componentName:"Nuvem de Tags"},"oj-ojThematicMap":{componentName:"Mapa Temático"},"oj-ojTimeline":{componentName:"Linha do Tempo",labelSeries:"Série",tooltipZoomIn:"Mais Zoom",tooltipZoomOut:"Menos Zoom"},
"oj-ojTreemap":{labelColor:"Cor",labelSize:"Tamanho",tooltipIsolate:"Isolar",tooltipRestore:"Restaurar",componentName:"Mapa em Árvore"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"B",labelScalingSuffixTrillion:"T",labelScalingSuffixQuadrillion:"Q",labelInvalidData:"Dados inválidos",labelNoData:"Nenhum dado a ser exibido",labelClearSelection:"Limpar Seleção",labelDataVisualization:"Visualização de Dados",messageNotReadyToRender:{summary:"Este componente deve ser anexado a uma subárvore visível do DOM antes da conversão."},
stateSelected:"Selecionado",stateUnselected:"Não Selecionado",stateMaximized:"Maximizado",stateMinimized:"Minimizado",stateExpanded:"Expandido",stateCollapsed:"Contraído",stateIsolated:"Isolado",stateHidden:"Oculto",stateVisible:"Visível",labelAndValue:"{0}: {1}"},"oj-ojNavigationList":{defaultRootLabel:"Lista de Navegação",hierMenuBtnLabel:"Botão Menu Hierárquico",selectedLabel:"selecionado",previousIcon:"Anterior",msgFetchingData:"Extraindo Dados...",msgNoData:"Não há itens para exibição."},"oj-ojSlider":{noValue:"ojSlider não tem valor",
maxMin:"O valor máx. não deve ser menor do que o mín.",valueRange:"O valor deve estar dentro da faixa de mín. e máx.",optionNum:"A opção {option} não é um número",invalidStep:"Etapa inválida; deve ser > 0"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Inserindo pop-up. Pressione F6 para navegar entre o pop-up e o controle associado.",ariaLiveRegionInitialFocusNone:"Pop-up aberto. Pressione F6 para navegar entre o pop-up e o controle associado.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Inserindo pop-up. O pop-up pode ser fechado navegando até o último link dentro do pop-up.",
ariaLiveRegionInitialFocusNoneTouch:"Pop-up aberto. Navegue até o próximo link para estabelecer o foco dentro do pop-up.",ariaFocusSkipLink:"Toque 2 vezes para navegar até o pop-up aberto.",ariaCloseSkipLink:"Toque 2 vezes para fechar o pop-up aberto."},"oj-ojMenu":{ariaLiveRegionInitialFocusMenuTouch:"Entrando no menu. O menu pode ser fechado sem selecionar um de seus itens, navegando até o link seguinte ao Menu.",ariaLiveRegionInitialFocusNoneTouch:"Menu aberto. Navegue até o próximo link para estabelecer o foco dentro do menu.",
"ariaPreceding Link":"Navegue à frente para acessar o menu aberto.",ariaFocusSkipLink:"Toque 2 vezes para navegar até o menu aberto.",ariaCloseSkipLink:"Toque 2 vezes para fechar o menu aberto."}});