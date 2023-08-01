// https://iconpark.bytedance.com/official

import { App } from 'vue'
import {
  PlayOne,
  FullScreenPlay,
  Lock,
  Unlock,
  Ppt,
  Format,
  Picture,
  FullScreen,
  List,
  OrderedList,
  Helpcenter,
  FlipVertically,
  FlipHorizontally,
  FontSize,
  Code,
  TextBold,
  TextItalic,
  TextUnderline,
  Strikethrough,
  Edit,
  Quote,
  BackgroundColor,
  Group,
  Ungroup,
  Back,
  Next,
  Fullwidth,
  AlignTop,
  AlignLeft,
  AlignRight,
  AlignBottom,
  AlignVertically,
  AlignHorizontally,
  BringToFront,
  SendToBack,
  AlignTextLeft,
  AlignTextRight,
  AlignTextCenter,
  RowHeight,
  Write,
  InsertTable,
  AddText,
  Fill,
  Tailoring,
  Effects,
  ColorFilter,
  Up,
  Down,
  Plus,
  Minus,
  Connection,
  BringToFrontOne,
  SentToBack,
  Github,
  ChartProportion,
  ChartHistogram,
  ChartHistogramOne,
  ChartLineArea,
  ChartRing,
  ChartScatter,
  ChartLine,
  ChartPie,
  Text,
  Rotate,
  LeftTwo,
  RightTwo,
  Platte,
  Close,
  CloseSmall,
  Undo,
  Transform,
  Click,
  Theme,
  ArrowCircleLeft,
  GraphicDesign,
  Logout,
  Erase,
  Clear,
  FolderClose,
  AlignTextTopOne,
  AlignTextBottomOne,
  AlignTextMiddleOne,
  Pause,
  VolumeMute,
  VolumeNotice,
  VolumeSmall,
  VideoTwo,
  Formula,
  LinkOne,
  FullScreenOne,
  OffScreenOne,
  Power,
  ListView,
  Magic,
  HighLight,
  Share,
  IndentLeft,
  IndentRight,
  VerticalSpacingBetweenItems,
  HorizontalSpacingBetweenItems,
  Copy,
  Delete,
  Square,
  Round,
  Needle,
  TextRotationNone,
  TextRotationDown,
  FormatBrush,
  PreviewOpen,
  PreviewClose,
  StopwatchStart,
} from '@icon-park/vue-next'

interface Icons {
  [key: string]: typeof PlayOne
}

export const icons: Icons = {
  IconPlayOne: PlayOne,
  IconFullScreenPlay: FullScreenPlay,
  IconLock: Lock,
  IconUnlock: Unlock,
  IconPpt: Ppt,
  IconFormat: Format,
  IconPicture: Picture,
  IconFullScreen: FullScreen,
  IconList: List,
  IconOrderedList: OrderedList,
  IconHelpcenter: Helpcenter,
  IconFlipVertically: FlipVertically,
  IconFlipHorizontally: FlipHorizontally,
  IconFontSize: FontSize,
  IconCode: Code,
  IconTextBold: TextBold,
  IconTextItalic: TextItalic,
  IconTextUnderline: TextUnderline,
  IconStrikethrough: Strikethrough,
  IconEdit: Edit,
  IconQuote: Quote,
  IconBackgroundColor: BackgroundColor,
  IconGroup: Group,
  IconUngroup: Ungroup,
  IconBack: Back,
  IconNext: Next,
  IconFullwidth: Fullwidth,
  IconAlignTop: AlignTop,
  IconAlignLeft: AlignLeft,
  IconAlignRight: AlignRight,
  IconAlignBottom: AlignBottom,
  IconAlignVertically: AlignVertically,
  IconAlignHorizontally: AlignHorizontally,
  IconBringToFront: BringToFront,
  IconSendToBack: SendToBack,
  IconAlignTextLeft: AlignTextLeft,
  IconAlignTextRight: AlignTextRight,
  IconAlignTextCenter: AlignTextCenter,
  IconRowHeight: RowHeight,
  IconWrite: Write,
  IconInsertTable: InsertTable,
  IconAddText: AddText,
  IconFill: Fill,
  IconTailoring: Tailoring,
  IconEffects: Effects,
  IconColorFilter: ColorFilter,
  IconUp: Up,
  IconDown: Down,
  IconPlus: Plus,
  IconMinus: Minus,
  IconConnection: Connection,
  IconBringToFrontOne: BringToFrontOne,
  IconSentToBack: SentToBack,
  IconGithub: Github,
  IconChartProportion: ChartProportion,
  IconChartHistogram: ChartHistogram,
  IconChartHistogramOne: ChartHistogramOne,
  IconChartLineArea: ChartLineArea,
  IconChartRing: ChartRing,
  IconChartScatter: ChartScatter,
  IconChartLine: ChartLine,
  IconChartPie: ChartPie,
  IconText: Text,
  IconRotate: Rotate,
  IconLeftTwo: LeftTwo,
  IconRightTwo: RightTwo,
  IconPlatte: Platte,
  IconClose: Close,
  IconCloseSmall: CloseSmall,
  IconUndo: Undo,
  IconTransform: Transform,
  IconClick: Click,
  IconTheme: Theme,
  IconArrowCircleLeft: ArrowCircleLeft,
  IconGraphicDesign: GraphicDesign,
  IconLogout: Logout,
  IconErase: Erase,
  IconClear: Clear,
  IconFolderClose: FolderClose,
  IconAlignTextTopOne: AlignTextTopOne,
  IconAlignTextBottomOne: AlignTextBottomOne,
  IconAlignTextMiddleOne: AlignTextMiddleOne,
  IconPause: Pause,
  IconVolumeMute: VolumeMute,
  IconVolumeNotice: VolumeNotice,
  IconVolumeSmall: VolumeSmall,
  IconVideoTwo: VideoTwo,
  IconFormula: Formula,
  IconLinkOne: LinkOne,
  IconFullScreenOne: FullScreenOne,
  IconOffScreenOne: OffScreenOne,
  IconPower: Power,
  IconListView: ListView,
  IconMagic: Magic,
  IconHighLight: HighLight,
  IconShare: Share,
  IconIndentLeft: IndentLeft,
  IconIndentRight: IndentRight,
  IconVerticalSpacingBetweenItems: VerticalSpacingBetweenItems,
  IconHorizontalSpacingBetweenItems: HorizontalSpacingBetweenItems,
  IconCopy: Copy,
  IconDelete: Delete,
  IconSquare: Square,
  IconRound: Round,
  IconNeedle: Needle,
  IconTextRotationNone: TextRotationNone,
  IconTextRotationDown: TextRotationDown,
  IconFormatBrush: FormatBrush,
  IconPreviewOpen: PreviewOpen,
  IconPreviewClose: PreviewClose,
  IconStopwatchStart: StopwatchStart,
}

export default {
  install(app: App) {
    for (const key of Object.keys(icons)) {
      app.component(key, icons[key])
    }
  }
}