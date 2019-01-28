<template>
  <div>
    <h2>css</h2>
    <vue-static-highlight
      theme="chrome"
      :content="css"
      lang="css"
      height="200px"
      style="overflow:auto"
      width="50%"
      @init="init"
    ></vue-static-highlight>
    <h2>javascript</h2>
    <vue-static-highlight
      theme="twilight"
      :content="js"
      lang="javascript"
      height="auto"
      width="100%"
      @init="init"
    ></vue-static-highlight>
    <h2>python</h2>
    <vue-static-highlight
      theme="chrome"
      :content="py"
      lang="python"
      width="50%"
      height="auto"
      @init="init"
    ></vue-static-highlight>
    <h2>lua</h2>
    <vue-static-highlight
      theme="twilight"
      :content="lua"
      lang="lua"
      height="auto"
      width="50%"
      @init="init"
    ></vue-static-highlight>
  </div>
</template>

<script>
export default {
  name: "static-highligh",
  data() {
    return {
      css: `
.text-layer {
    font: 12px Monaco, "Courier New", monospace;
    font-size: 3vmin;
    cursor: text;
}

.blinker {
    animation: blink 1s linear infinite alternate;
}

@keyframes blink {
    0%, 40% {
        opacity: 0; /*
        */
        opacity: 1
    }

    40.5%, 100% {
        opacity: 1
    }
}

      `,
      js: `
function foo(items, nada) {
    for (var i=0; i<items.length; i++) {
        alert(items[i] + "juhu\n");
    }	// Real Tab.
}
      `,
      py: `
package main

import (
    "fmt"
    "math"
)

func main() {
    fmt.Println(pi(5000))
}

// pi launches n goroutines to compute an
// approximation of pi.
func pi(n int) float64 {
    ch := make(chan float64)
    for k := 0; k <= n; k++ {
        go term(ch, float64(k))
    }
    f := 0.0
    for k := 0; k <= n; k++ {
        f += <-ch
    }
    return f
}

func term(ch chan float64, k float64) {
    ch <- 4 * math.Pow(-1, k) / (2*k + 1)
}
      `,
      lua:`
--[[--
num_args takes in 5.1 byte code and extracts the number of arguments
from its function header.
--]]--

function int(t)
	return t:byte(1)+t:byte(2)*0x100+t:byte(3)*0x10000+t:byte(4)*0x1000000
end

function num_args(func)
	local dump = string.dump(func)
	local offset, cursor = int(dump:sub(13)), offset + 26
	--Get the params and var flag (whether there's a ... in the param)
	return dump:sub(cursor):byte(), dump:sub(cursor+1):byte()
end

-- Usage:
num_args(function(a,b,c,d, ...) end) -- return 4, 7

-- Python styled string format operator
local gm = debug.getmetatable("")

gm.__mod=function(self, other)
    if type(other) ~= "table" then other = {other} end
    for i,v in ipairs(other) do other[i] = tostring(v) end
    return self:format(unpack(other))
end

print([===[
    blah blah %s, (%d %d)
]===]%{"blah", num_args(int)})

--[=[--
table.maxn is deprecated, use # instead.
--]=]--
print(table.maxn{1,2,[4]=4,[8]=8) -- outputs 8 instead of 2

print(5 --[[ blah ]])      
      `
    };
  },
  methods: {
    init() {
      require("brace/mode/css");
      require("brace/theme/chrome");
      require("brace/mode/javascript");
      require("brace/mode/lua");
      require("brace/theme/twilight");
    }
  }
};
</script>

