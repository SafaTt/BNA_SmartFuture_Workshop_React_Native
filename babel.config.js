module.exports = function(api) { //fonction est exécutée lorsque Babel est chargé.
  api.cache(true); //Active la mise en cache de la configuration de Babel 
  return {
    presets: ['babel-preset-expo'], //les presets Babel à utiliser (ens des plugin(module))
    plugins: ['react-native-reanimated/plugin'], //Spécifie les plugins Babel à utiliser.  (assure le fonctionnement de reanimated)
   //activer le plugin react-native-reanimated lors de la compilation du code JavaScript.
  }; 
};
