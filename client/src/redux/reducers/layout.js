/* LAYOUT */
export const CHANGE_LAYOUT = "CHANGE_LAYOUT";
export const CHANGE_LAYOUT_WIDTH = "CHANGE_LAYOUT_WIDTH";
export const CHANGE_SIDEBAR_THEME = "CHANGE_SIDEBAR_THEME";
export const CHANGE_SIDEBAR_TYPE = "CHANGE_SIDEBAR_TYPE";

// topbar
export const CHANGE_TOPBAR_THEME = "CHANGE_TOPBAR_THEME";

// show sidebar
export const SHOW_SIDEBAR = "SHOW_SIDEBAR";
export const TOGGLE_LEFTMENU = "TOGGLE_LEFTMENU";

/* RIGHT SIDEBAR */
export const SHOW_RIGHT_SIDEBAR = "SHOW_RIGHT_SIDEBAR";

// Preloader
export const CHANGE_PRELOADER = "CHANGE_PRELOADER";

const initialState = {
	layoutType: "horizontal",
	layoutWidth: "boxed",
	leftSideBarTheme: "dark",
	leftSideBarType: "default",
	topbarTheme: "light",
	isPreloader: false,
	showRightSidebar: false,
	isMobile: true,
	showSidebar : true,
	leftMenu : false
};

const layout = (state = initialState, action) => {
   // console.log("action",action,state);
	switch (action.type) {
		case CHANGE_LAYOUT:
			return {
				...state,
				layoutType: action.payload
			};
		case CHANGE_PRELOADER:
			return {
				...state,
				isPreloader: action.payload
			};

		case CHANGE_LAYOUT_WIDTH:
			return {
				...state,
				layoutWidth: action.payload
			};
		case CHANGE_SIDEBAR_THEME:
			return {
				...state,
				leftSideBarTheme: action.payload
			};
		case CHANGE_SIDEBAR_TYPE:
			return {
				...state,
				leftSideBarType: action.payload.sidebarType
			};
		case CHANGE_TOPBAR_THEME:
			return {
				...state,
				topbarTheme: action.payload
			};
		case SHOW_RIGHT_SIDEBAR:
			return {
				...state,
				showRightSidebar: action.payload
			};
         case SHOW_SIDEBAR:
			return {
				...state,
				showSidebar: action.payload
			};
	   case TOGGLE_LEFTMENU:
			return {
				...state,
				leftMenu: action.payload
			};
			
		default:
			return state;
	}
};

export default layout;
