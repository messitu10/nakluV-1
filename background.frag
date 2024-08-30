#version 450

layout(location = 0) out vec4 outColor;

layout(location = 0) in vec2 position;

void main() {
	outColor = vec4(position, 0.1, 1.0);
}