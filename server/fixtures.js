/**
 * Reaction startup
 *
 * Load app private fixtures
 */

Meteor.startup(function () {
  try {
    //replaced reaction.json
    return Fixtures.loadSettings(Assets.getText("settings/dev.settings.json"));
  } catch (error) {
    ReactionCore.Log.debug("loadSettings reaction.json not loaded.", error);
  }
});
