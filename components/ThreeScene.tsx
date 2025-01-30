"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 3;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, 200);
        mountRef.current?.appendChild(renderer.domElement);

        // Create basic cube
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshStandardMaterial({ color: "blue" });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        const light = new THREE.AmbientLight(0xffffff);
        scene.add(light);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        return () => mountRef.current?.removeChild(renderer.domElement);
    }, []);

    return <div ref={mountRef} />;
}
