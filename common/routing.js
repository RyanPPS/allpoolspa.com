/**
 * Reaction App Router
 * Define general app routing.
 * ReactionCore common/routing.js contains the core routes.
 */

let staticPages = ["about", "team", "faqs", "terms", "privacy" ];

/*
 * ShopController Controller
 * main controller for the shop, most views except admin
 */
let landingController = RouteController.extend({
  onAfterAction: function () {
    return ReactionCore.MetaData.refresh(this.route, this.params);
  },
  onBeforeAction: function () {
    if (Meteor.isClient) {
      this.render("loading");
      Alerts.removeSeen();
      $(document).trigger("closeAllPopovers");
    }

    if (Meteor.isClient) {
      if (ReactionCore.hasDashboardAccess()) {
        this.layout("coreAdminLayout");
        // Find a registry entry for this page that provides settings
        // -- Settings is the default view for the "Action View"
        ReactionCore.setActionView();
        // this.render("dashboardPackages")
        $("body").addClass("admin");
      } else {
        $("body").removeClass("admin");
        this.layout("coreLayout");
      }
    }
    return this.next();
  },

  yieldTemplates: {
    landingPageHeader: {
      to: "layoutHeader"
    },
    landingPageFooter: {
      to: "layoutFooter"
    }
  }
});

this.landingController = landingController;

Router.route('/landing', {
  controller: landingController,
  template: "hero",
  name: "landing"
});
/**
 * app router mapping
 */
Router.map(function route() {
  for (let page of staticPages) {
    this.route(page, {
      controller: ShopController,
      name: page
    });
  }
  /*
  this.route("landing", {
    controller: landingController,
    name: "landing",
    path: "/landing",
    template: "hero",
  });
  */
  this.route("customize", {
    controller: ShopController,
    name: "customize",
    template: "landingForm"
  });
  return this.route("notFound", {
    path: "/(.*)"
  });
});
