import {
  ShisaAppearance,
  ShisaArrowDown,
  ShisaArrowLeft,
  ShisaArrowRight,
  ShisaArrowUp,
  ShisaAudio,
  ShisaAudioFile,
  ShisaBookmark,
  ShisaBox,
  ShisaChat,
  ShisaChatCheck,
  ShisaChatCross,
  ShisaChatMinus,
  ShisaChatPlus,
  ShisaCheck,
  ShisaCheckedBox,
  ShisaChevronDown,
  ShisaChevronLeft,
  ShisaChevronRight,
  ShisaChevronUp,
  ShisaChip,
  ShisaClock,
  ShisaCloud,
  ShisaCollapse,
  ShisaCopy,
  ShisaCross,
  ShisaCursor,
  ShisaDark,
  ShisaDatabase,
  ShisaDatabaseMinus,
  ShisaDatabasePlus,
  ShisaDocument,
  ShisaDoubleCircle,
  ShisaDraw,
  ShisaEdit,
  ShisaExpand,
  ShisaExternal,
  ShisaEye,
  ShisaFilter,
  ShisaFolder,
  ShisaFolderMinus,
  ShisaFolderOpen,
  ShisaFolderPlus,
  ShisaGlobe,
  ShisaGrid,
  ShisaHistory,
  ShisaHome,
  ShisaImage,
  ShisaInbox,
  ShisaInfo,
  ShisaKeyboard,
  ShisaKeyframe,
  ShisaKeyframeMinus,
  ShisaKeyframePlus,
  ShisaLayoutExpanded,
  ShisaLayoutSidebar,
  ShisaLayoutSplit,
  ShisaLight,
  ShisaLink,
  ShisaLock,
  ShisaMail,
  ShisaMasonary,
  ShisaMaximize,
  ShisaMinimize,
  ShisaMinus,
  ShisaMinusSquare,
  ShisaMoniter,
  ShisaMoreHorizontal,
  ShisaMoreVertical,
  ShisaPause,
  ShisaPin,
  ShisaPlay,
  ShisaPlus,
  ShisaPlusSquare,
  ShisaPointer,
  ShisaRedo,
  ShisaRefresh,
  ShisaReload,
  ShisaReplay,
  ShisaSearch,
  ShisaSettings,
  ShisaSmartphone,
  ShisaSparkle,
  ShisaSpinner,
  ShisaSwap,
  ShisaTimer,
  ShisaTrash,
  ShisaTreeBranch,
  ShisaUndo,
  ShisaUser,
  ShisaUserMinus,
  ShisaUserPlus,
  ShisaUsers,
  ShisaVariables,
  ShisaVerified,
  ShisaVideo,
  ShisaVideoFile,
  ShisaWindow,
  ShisaWindows,
  ShisaWrite,
} from "shisa-icon";
import { toast } from "sonner";

export default function IconGrid() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(`<${text}/>`).then(() => {
      toast("Copied", {
        icon: <ShisaCopy />,
        description: `Added "<${text}/>" to clipboard!`,
      });
    });
  };

  return (
    <div className="grid grid-cols-6 sm:grid-cols-12 gap-0.5 text-xl sm:text-2xl w-fit mx-auto max-w-7xl p-6 *:cursor-copy *:transition-transform *:p-3 *:rounded-xl *:active:scale-95 *:hover:bg-zinc-100 dark:*:hover:bg-zinc-800">
      <button
        title="ShisaAppearance"
        onClick={() => copyToClipboard("ShisaAppearance")}
      >
        <ShisaAppearance name="ShisaAppearance" />
      </button>
      <button
        title="ShisaArrowDown"
        onClick={() => copyToClipboard("ShisaArrowDown")}
      >
        <ShisaArrowDown name="ShisaArrowDown" />
      </button>
      <button
        title="ShisaArrowLeft"
        onClick={() => copyToClipboard("ShisaArrowLeft")}
      >
        <ShisaArrowLeft name="ShisaArrowLeft" />
      </button>
      <button
        title="ShisaArrowRight"
        onClick={() => copyToClipboard("ShisaArrowRight")}
      >
        <ShisaArrowRight name="ShisaArrowRight" />
      </button>
      <button
        title="ShisaArrowUp"
        onClick={() => copyToClipboard("ShisaArrowUp")}
      >
        <ShisaArrowUp name="ShisaArrowUp" />
      </button>
      <button title="ShisaAudio" onClick={() => copyToClipboard("ShisaAudio")}>
        <ShisaAudio name="ShisaAudio" />
      </button>
      <button
        title="ShisaAudioFile"
        onClick={() => copyToClipboard("ShisaAudioFile")}
      >
        <ShisaAudioFile name="ShisaAudioFile" />
      </button>
      <button
        title="ShisaBookmark"
        onClick={() => copyToClipboard("ShisaBookmark")}
      >
        <ShisaBookmark name="ShisaBookmark" />
      </button>
      <button title="ShisaBox" onClick={() => copyToClipboard("ShisaBox")}>
        <ShisaBox name="ShisaBox" />
      </button>
      <button title="ShisaChat" onClick={() => copyToClipboard("ShisaChat")}>
        <ShisaChat name="ShisaChat" />
      </button>
      <button
        title="ShisaChatCheck"
        onClick={() => copyToClipboard("ShisaChatCheck")}
      >
        <ShisaChatCheck name="ShisaChatCheck" />
      </button>
      <button
        title="ShisaChatCross"
        onClick={() => copyToClipboard("ShisaChatCross")}
      >
        <ShisaChatCross name="ShisaChatCross" />
      </button>
      <button
        title="ShisaChatMinus"
        onClick={() => copyToClipboard("ShisaChatMinus")}
      >
        <ShisaChatMinus name="ShisaChatMinus" />
      </button>
      <button
        title="ShisaChatPlus"
        onClick={() => copyToClipboard("ShisaChatPlus")}
      >
        <ShisaChatPlus name="ShisaChatPlus" />
      </button>
      <button title="ShisaCheck" onClick={() => copyToClipboard("ShisaCheck")}>
        <ShisaCheck name="ShisaCheck" />
      </button>
      <button
        title="ShisaCheckedBox"
        onClick={() => copyToClipboard("ShisaCheckedBox")}
      >
        <ShisaCheckedBox name="ShisaCheckedBox" />
      </button>
      <button
        title="ShisaChevronDown"
        onClick={() => copyToClipboard("ShisaChevronDown")}
      >
        <ShisaChevronDown name="ShisaChevronDown" />
      </button>
      <button
        title="ShisaChevronLeft"
        onClick={() => copyToClipboard("ShisaChevronLeft")}
      >
        <ShisaChevronLeft name="ShisaChevronLeft" />
      </button>
      <button
        title="ShisaChevronRight"
        onClick={() => copyToClipboard("ShisaChevronRight")}
      >
        <ShisaChevronRight name="ShisaChevronRight" />
      </button>
      <button
        title="ShisaChevronUp"
        onClick={() => copyToClipboard("ShisaChevronUp")}
      >
        <ShisaChevronUp name="ShisaChevronUp" />
      </button>
      <button title="ShisaChip" onClick={() => copyToClipboard("ShisaChip")}>
        <ShisaChip name="ShisaChip" />
      </button>
      <button title="ShisaClock" onClick={() => copyToClipboard("ShisaClock")}>
        <ShisaClock name="ShisaClock" />
      </button>
      <button title="ShisaCloud" onClick={() => copyToClipboard("ShisaCloud")}>
        <ShisaCloud name="ShisaCloud" />
      </button>
      <button
        title="ShisaCollapse"
        onClick={() => copyToClipboard("ShisaCollapse")}
      >
        <ShisaCollapse name="ShisaCollapse" />
      </button>
      <button title="ShisaCopy" onClick={() => copyToClipboard("ShisaCopy")}>
        <ShisaCopy name="ShisaCopy" />
      </button>
      <button title="ShisaCross" onClick={() => copyToClipboard("ShisaCross")}>
        <ShisaCross name="ShisaCross" />
      </button>
      <button
        title="ShisaCursor"
        onClick={() => copyToClipboard("ShisaCursor")}
      >
        <ShisaCursor name="ShisaCursor" />
      </button>
      <button title="ShisaDark" onClick={() => copyToClipboard("ShisaDark")}>
        <ShisaDark name="ShisaDark" />
      </button>
      <button
        title="ShisaDatabase"
        onClick={() => copyToClipboard("ShisaDatabase")}
      >
        <ShisaDatabase name="ShisaDatabase" />
      </button>
      <button
        title="ShisaDatabaseMinus"
        onClick={() => copyToClipboard("ShisaDatabaseMinus")}
      >
        <ShisaDatabaseMinus name="ShisaDatabaseMinus" />
      </button>
      <button
        title="ShisaDatabasePlus"
        onClick={() => copyToClipboard("ShisaDatabasePlus")}
      >
        <ShisaDatabasePlus name="ShisaDatabasePlus" />
      </button>
      <button
        title="ShisaDocument"
        onClick={() => copyToClipboard("ShisaDocument")}
      >
        <ShisaDocument name="ShisaDocument" />
      </button>
      <button
        title="ShisaDoubleCircle"
        onClick={() => copyToClipboard("ShisaDoubleCircle")}
      >
        <ShisaDoubleCircle name="ShisaDoubleCircle" />
      </button>
      <button title="ShisaDraw" onClick={() => copyToClipboard("ShisaDraw")}>
        <ShisaDraw name="ShisaDraw" />
      </button>
      <button title="ShisaEdit" onClick={() => copyToClipboard("ShisaEdit")}>
        <ShisaEdit name="ShisaEdit" />
      </button>
      <button
        title="ShisaExpand"
        onClick={() => copyToClipboard("ShisaExpand")}
      >
        <ShisaExpand name="ShisaExpand" />
      </button>
      <button
        title="ShisaExternal"
        onClick={() => copyToClipboard("ShisaExternal")}
      >
        <ShisaExternal name="ShisaExternal" />
      </button>
      <button title="ShisaEye" onClick={() => copyToClipboard("ShisaEye")}>
        <ShisaEye name="ShisaEye" />
      </button>
      <button
        title="ShisaFilter"
        onClick={() => copyToClipboard("ShisaFilter")}
      >
        <ShisaFilter name="ShisaFilter" />
      </button>
      <button
        title="ShisaFolder"
        onClick={() => copyToClipboard("ShisaFolder")}
      >
        <ShisaFolder name="ShisaFolder" />
      </button>
      <button
        title="ShisaFolderMinus"
        onClick={() => copyToClipboard("ShisaFolderMinus")}
      >
        <ShisaFolderMinus name="ShisaFolderMinus" />
      </button>
      <button
        title="ShisaFolderOpen"
        onClick={() => copyToClipboard("ShisaFolderOpen")}
      >
        <ShisaFolderOpen name="ShisaFolderOpen" />
      </button>
      <button
        title="ShisaFolderPlus"
        onClick={() => copyToClipboard("ShisaFolderPlus")}
      >
        <ShisaFolderPlus name="ShisaFolderPlus" />
      </button>
      <button title="ShisaGlobe" onClick={() => copyToClipboard("ShisaGlobe")}>
        <ShisaGlobe name="ShisaGlobe" />
      </button>
      <button title="ShisaGrid" onClick={() => copyToClipboard("ShisaGrid")}>
        <ShisaGrid name="ShisaGrid" />
      </button>
      <button
        title="ShisaHistory"
        onClick={() => copyToClipboard("ShisaHistory")}
      >
        <ShisaHistory name="ShisaHistory" />
      </button>
      <button title="ShisaHome" onClick={() => copyToClipboard("ShisaHome")}>
        <ShisaHome name="ShisaHome" />
      </button>
      <button title="ShisaImage" onClick={() => copyToClipboard("ShisaImage")}>
        <ShisaImage name="ShisaImage" />
      </button>
      <button title="ShisaInbox" onClick={() => copyToClipboard("ShisaInbox")}>
        <ShisaInbox name="ShisaInbox" />
      </button>
      <button title="ShisaInfo" onClick={() => copyToClipboard("ShisaInfo")}>
        <ShisaInfo name="ShisaInfo" />
      </button>
      <button
        title="ShisaKeyboard"
        onClick={() => copyToClipboard("ShisaKeyboard")}
      >
        <ShisaKeyboard name="ShisaKeyboard" />
      </button>
      <button
        title="ShisaKeyframe"
        onClick={() => copyToClipboard("ShisaKeyframe")}
      >
        <ShisaKeyframe name="ShisaKeyframe" />
      </button>
      <button
        title="ShisaKeyframeMinus"
        onClick={() => copyToClipboard("ShisaKeyframeMinus")}
      >
        <ShisaKeyframeMinus name="ShisaKeyframeMinus" />
      </button>
      <button
        title="ShisaKeyframePlus"
        onClick={() => copyToClipboard("ShisaKeyframePlus")}
      >
        <ShisaKeyframePlus name="ShisaKeyframePlus" />
      </button>
      <button
        title="ShisaLayoutExpanded"
        onClick={() => copyToClipboard("ShisaLayoutExpanded")}
      >
        <ShisaLayoutExpanded name="ShisaLayoutExpanded" />
      </button>
      <button
        title="ShisaLayoutSidebar"
        onClick={() => copyToClipboard("ShisaLayoutSidebar")}
      >
        <ShisaLayoutSidebar name="ShisaLayoutSidebar" />
      </button>
      <button
        title="ShisaLayoutSplit"
        onClick={() => copyToClipboard("ShisaLayoutSplit")}
      >
        <ShisaLayoutSplit name="ShisaLayoutSplit" />
      </button>
      <button title="ShisaLight" onClick={() => copyToClipboard("ShisaLight")}>
        <ShisaLight name="ShisaLight" />
      </button>
      <button title="ShisaLink" onClick={() => copyToClipboard("ShisaLink")}>
        <ShisaLink name="ShisaLink" />
      </button>
      <button title="ShisaLock" onClick={() => copyToClipboard("ShisaLock")}>
        <ShisaLock name="ShisaLock" />
      </button>
      <button title="ShisaMail" onClick={() => copyToClipboard("ShisaMail")}>
        <ShisaMail name="ShisaMail" />
      </button>
      <button
        title="ShisaMasonary"
        onClick={() => copyToClipboard("ShisaMasonary")}
      >
        <ShisaMasonary name="ShisaMasonary" />
      </button>
      <button
        title="ShisaMaximize"
        onClick={() => copyToClipboard("ShisaMaximize")}
      >
        <ShisaMaximize name="ShisaMaximize" />
      </button>
      <button
        title="ShisaMinimize"
        onClick={() => copyToClipboard("ShisaMinimize")}
      >
        <ShisaMinimize name="ShisaMinimize" />
      </button>
      <button title="ShisaMinus" onClick={() => copyToClipboard("ShisaMinus")}>
        <ShisaMinus name="ShisaMinus" />
      </button>
      <button
        title="ShisaMinusSquare"
        onClick={() => copyToClipboard("ShisaMinusSquare")}
      >
        <ShisaMinusSquare name="ShisaMinusSquare" />
      </button>
      <button
        title="ShisaMoniter"
        onClick={() => copyToClipboard("ShisaMoniter")}
      >
        <ShisaMoniter name="ShisaMoniter" />
      </button>
      <button
        title="ShisaMoreHorizontal"
        onClick={() => copyToClipboard("ShisaMoreHorizontal")}
      >
        <ShisaMoreHorizontal name="ShisaMoreHorizontal" />
      </button>
      <button
        title="ShisaMoreVertical"
        onClick={() => copyToClipboard("ShisaMoreVertical")}
      >
        <ShisaMoreVertical name="ShisaMoreVertical" />
      </button>
      <button title="ShisaPause" onClick={() => copyToClipboard("ShisaPause")}>
        <ShisaPause name="ShisaPause" />
      </button>
      <button title="ShisaPin" onClick={() => copyToClipboard("ShisaPin")}>
        <ShisaPin name="ShisaPin" />
      </button>
      <button title="ShisaPlay" onClick={() => copyToClipboard("ShisaPlay")}>
        <ShisaPlay name="ShisaPlay" />
      </button>
      <button title="ShisaPlus" onClick={() => copyToClipboard("ShisaPlus")}>
        <ShisaPlus name="ShisaPlus" />
      </button>
      <button
        title="ShisaPlusSquare"
        onClick={() => copyToClipboard("ShisaPlusSquare")}
      >
        <ShisaPlusSquare name="ShisaPlusSquare" />
      </button>
      <button
        title="ShisaPointer"
        onClick={() => copyToClipboard("ShisaPointer")}
      >
        <ShisaPointer name="ShisaPointer" />
      </button>
      <button title="ShisaRedo" onClick={() => copyToClipboard("ShisaRedo")}>
        <ShisaRedo name="ShisaRedo" />
      </button>
      <button
        title="ShisaRefresh"
        onClick={() => copyToClipboard("ShisaRefresh")}
      >
        <ShisaRefresh name="ShisaRefresh" />
      </button>
      <button
        title="ShisaReload"
        onClick={() => copyToClipboard("ShisaReload")}
      >
        <ShisaReload name="ShisaReload" />
      </button>
      <button
        title="ShisaReplay"
        onClick={() => copyToClipboard("ShisaReplay")}
      >
        <ShisaReplay name="ShisaReplay" />
      </button>
      <button
        title="ShisaSearch"
        onClick={() => copyToClipboard("ShisaSearch")}
      >
        <ShisaSearch name="ShisaSearch" />
      </button>
      <button
        title="ShisaSettings"
        onClick={() => copyToClipboard("ShisaSettings")}
      >
        <ShisaSettings name="ShisaSettings" />
      </button>
      <button
        title="ShisaSmartphone"
        onClick={() => copyToClipboard("ShisaSmartphone")}
      >
        <ShisaSmartphone name="ShisaSmartphone" />
      </button>
      <button
        title="ShisaSparkle"
        onClick={() => copyToClipboard("ShisaSparkle")}
      >
        <ShisaSparkle name="ShisaSparkle" />
      </button>
      <button
        title="ShisaSpinner"
        onClick={() => copyToClipboard("ShisaSpinner")}
      >
        <ShisaSpinner name="ShisaSpinner" />
      </button>
      <button title="ShisaSwap" onClick={() => copyToClipboard("ShisaSwap")}>
        <ShisaSwap name="ShisaSwap" />
      </button>
      <button title="ShisaTimer" onClick={() => copyToClipboard("ShisaTimer")}>
        <ShisaTimer name="ShisaTimer" />
      </button>
      <button title="ShisaTrash" onClick={() => copyToClipboard("ShisaTrash")}>
        <ShisaTrash name="ShisaTrash" />
      </button>
      <button
        title="ShisaTreeBranch"
        onClick={() => copyToClipboard("ShisaTreeBranch")}
      >
        <ShisaTreeBranch name="ShisaTreeBranch" />
      </button>
      <button title="ShisaUndo" onClick={() => copyToClipboard("ShisaUndo")}>
        <ShisaUndo name="ShisaUndo" />
      </button>
      <button title="ShisaUser" onClick={() => copyToClipboard("ShisaUser")}>
        <ShisaUser name="ShisaUser" />
      </button>
      <button
        title="ShisaUserPlus"
        onClick={() => copyToClipboard("ShisaUserPlus")}
      >
        <ShisaUserPlus name="ShisaUserPlus" />
      </button>
      <button
        title="ShisaUserMinus"
        onClick={() => copyToClipboard("ShisaUserMinus")}
      >
        <ShisaUserMinus name="ShisaUserMinus" />
      </button>
      <button title="ShisaUsers" onClick={() => copyToClipboard("ShisaUsers")}>
        <ShisaUsers name="ShisaUsers" />
      </button>
      <button
        title="ShisaVariables"
        onClick={() => copyToClipboard("ShisaVariables")}
      >
        <ShisaVariables name="ShisaVariables" />
      </button>
      <button
        title="ShisaVerified"
        onClick={() => copyToClipboard("ShisaVerified")}
      >
        <ShisaVerified name="ShisaVerified" />
      </button>
      <button title="ShisaVideo" onClick={() => copyToClipboard("ShisaVideo")}>
        <ShisaVideo name="ShisaVideo" />
      </button>
      <button
        title="ShisaVideoFile"
        onClick={() => copyToClipboard("ShisaVideoFile")}
      >
        <ShisaVideoFile name="ShisaVideoFile" />
      </button>
      <button
        title="ShisaWindow"
        onClick={() => copyToClipboard("ShisaWindow")}
      >
        <ShisaWindow name="ShisaWindow" />
      </button>
      <button
        title="ShisaWindows"
        onClick={() => copyToClipboard("ShisaWindows")}
      >
        <ShisaWindows name="ShisaWindows" />
      </button>
      <button title="ShisaWrite" onClick={() => copyToClipboard("ShisaWrite")}>
        <ShisaWrite name="ShisaWrite" />
      </button>
    </div>
  );
}
