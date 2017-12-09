window.addEventListener("DOMContentLoaded", () => {
	let menuContainer = new DOM.ComponentLoader("/assets/includes/common/").doc.querySelector("Body");
		menuContainer.childNodes.forEach(component => document.body.appendChild(component));

		new DOM('$*[Data-Component="Frame-Content"]').appendChild(new DOM("$Main"));

		new DOM('$*[Data-Component="Frame-Content_Toolbar_DrawerBtn"]').addEventListener("click", () => {
			let drawer = new mdc.drawer.MDCPersistentDrawer(new DOM('$*[Data-Component="Frame-Drawer"]'));
				drawer.open = !drawer.open;
		});
		
	window.mdc.autoInit();

	new DOM("@Main").forEach(elem => {
		elem.classList.add("mdc-typography");
	});
});