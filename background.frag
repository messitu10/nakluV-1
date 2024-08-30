#version 450

layout(location = 0) out vec4 outColor;
layout(location = 0) in vec2 position;

void main() {
    vec2 uv = (position + 1.0) * 10.0; // Scale UV coordinates for a tighter pattern

    // Create a checkerboard pattern using modulo operation
    float checker = mod(floor(uv.x) + floor(uv.y), 2.0);

    vec3 color = checker == 0.0 ? vec3(0.0, 0.0, 0.0) : vec3(1, 1, 1);

    outColor = vec4(color, 1.0);
}