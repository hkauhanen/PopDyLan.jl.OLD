include("../src/PopDyLan.jl")

import Pkg
Pkg.add("Documenter")
Pkg.add("Distributions")

using Documenter, .PopDyLan

makedocs(sitename="PopDyLan.jl",
         pages = ["Home" => "intro.md",
                  "Usage" => "usage.md",
                  "Reference" => [
                                  "Types" => "types.md",
                                  "Methods" => "methods.md"
                                 ],
                  "Examples" => "examples.md"])

deploydocs(repo="github.com/hkauhanen/PopDyLan.jl.git", 
           devbranch="dev")
