var documenterSearchIndex = {"docs":
[{"location":"intro/#PopDyLan.jl-Documentation-1","page":"Home","title":"PopDyLan.jl Documentation","text":"","category":"section"},{"location":"intro/#","page":"Home","title":"Home","text":"PopDyLan.jl is a Julia package for exploring the population dynamics of language through agent-based simulations.","category":"page"},{"location":"intro/#","page":"Home","title":"Home","text":"note: Note\nPopDyLan.jl is currently in development, awaiting a first stable release. Use at your own risk.","category":"page"},{"location":"intro/#","page":"Home","title":"Home","text":"note: Note\nThis Documentation assumes you are running Julia 1.2 or later.","category":"page"},{"location":"usage/#Usage-1","page":"Usage","title":"Usage","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"PopDyLan is currently under alpha development and not yet within the Julia General Registry. To install the latest stable release from GitHub:","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"using Pkg\nPkg.add(PackageSpec(url=\"https://github.com/hkauhanen/PopDyLan.jl\"))","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"Alternatively, to install the current development version with all bells and whistles (and bugs!):","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"Pkg.add(PackageSpec(url=\"https://github.com/hkauhanen/PopDyLan.jl\", rev=\"dev\"))","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"The above command(s) need be run one time only. Once installed, you can load the module at the start of your session in the usual way:","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"using PopDyLan","category":"page"},{"location":"examples/#Examples-1","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"examples/#","page":"Examples","title":"Examples","text":"Usage examples go here...","category":"page"},{"location":"methods/#Methods-1","page":"Methods","title":"Methods","text":"","category":"section"},{"location":"methods/#","page":"Methods","title":"Methods","text":"Methods (functions) operate on types, producing an output or modifying their inputs (or, sometimes, not doing anything at all). Names of methods that (may) modify their arguments end, per Julian conventions, in an exclamation point.","category":"page"},{"location":"methods/#","page":"Methods","title":"Methods","text":"note: Note\nIn Julia, types do not own methods (like objects in, say, C++ do). As a consequence, to make foo act on bar, we do something like act(foo, bar) rather than foo.act(bar).","category":"page"},{"location":"methods/#","page":"Methods","title":"Methods","text":"Methods are here divided into simulation methods (functions you use to conduct simulations) and auxiliary methods (e.g. functions for dealing with data).","category":"page"},{"location":"methods/#Simulation-Methods-1","page":"Methods","title":"Simulation Methods","text":"","category":"section"},{"location":"methods/#","page":"Methods","title":"Methods","text":"listen!(x::VL, y::VL, a)","category":"page"},{"location":"methods/#Auxiliary-Methods-1","page":"Methods","title":"Auxiliary Methods","text":"","category":"section"},{"location":"types/#Types-1","page":"Types","title":"Types","text":"","category":"section"},{"location":"types/#","page":"Types","title":"Types","text":"In PopDyLan.jl, important data structures are given their own types. Thus, there is a type for a speaker, a type for a speech community, a type for a grammar, etc. These are referenced below, categorized into linguistic types (types for grammars, parameter settings, and the like), individual types (types for representing individual speakers) and population types (types for speech communities).","category":"page"},{"location":"types/#Linguistic-Types-1","page":"Types","title":"Linguistic Types","text":"","category":"section"},{"location":"types/#Individual-Types-1","page":"Types","title":"Individual Types","text":"","category":"section"},{"location":"types/#","page":"Types","title":"Types","text":"VL","category":"page"},{"location":"types/#Population-Types-1","page":"Types","title":"Population Types","text":"","category":"section"}]
}
