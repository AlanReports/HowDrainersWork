// A simple and effective way to detect if a page contains a cryptocurrency drainer is this:

if (window.config != null || window.options != null) {
  alert("Likely a drainer page")
};

// This script works because drainer scripts often inject their configuration options into the webpage under a name such as "config" and "options".
// This is not 100% perfect and there is much better stratergies. 
