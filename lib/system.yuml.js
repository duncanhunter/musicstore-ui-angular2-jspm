System.trace = true;

// window.showModuleRelationships = function (moduleType) {
//   var modules = Object.keys(System.loads)
//     .filter(function (address) {
//        var addressSection =  address.split('/');
//          if(moduleType !== undefined && addressSection[3] === 'app'){
//              return addressSection[4] === moduleType
//          }
//          return addressSection[3] === 'app'
//     })

window.showModuleRelationships = function (includesModuleType, excludesModuleType) {
    var modules = Object.keys(System.loads)
        .filter(function (address) {
            if (includesModuleType !== undefined || excludesModuleType !== undefined) {
                return address.includes(includesModuleType)
                && address.includes('/app/')
                && address.endsWith('.ts')
                && !address.includes(excludesModuleType); 
            }
            return address.includes('/app/') && address.endsWith('.ts');
        })
        .map(function (moduleName) {
            console.log('modulName', moduleName);
            return System.loads[moduleName];
        });

    function displayName(module) {
        return module
            .replace(System.baseURL, "");
    }

    var moduleDefinitions = modules.map(function (module) {
        var name = displayName(module.name);
        return "[" + name + "]";
    });

    var dependencyDefinitions = [];

    modules
        .filter(function (module) {
            return module.deps.length > 0;
        })
        .forEach(function (module) {
            var name = displayName(module.name);

            var dependencies = module.deps
                .map(displayName)
                .map(function (dependencyName) {
                    return "[" + name + "]->[" + dependencyName + "]"
                });

            dependencyDefinitions = dependencyDefinitions.concat(dependencies);
        });

    var definitions = moduleDefinitions.concat(dependencyDefinitions);

    window.open("http://yuml.me/diagram/plain/class/" + definitions);

};