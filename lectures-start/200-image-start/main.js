//const THREE = window.MINDAR.IMAGE.THREE;
import * as THREE from 'three';
import { MindARThree } from 'mindar-image-three';

document.addEventListener('DOMContentLoaded', () => {
    const start = async () => {
        //inicialize MindAR
        const mindarThree = new MindARThree({
            container: document.body,
            imageTargetSrc: '../../assets/targets/beaver.mind'
        });

        const { renderer, scene, camera } = mindarThree;

        //Create AR object
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.5 });
        const plane = new THREE.Mesh(geometry, material);

        //Create anchor
        const anchor = mindarThree.addAnchor(0);
        anchor.group.add(plane); //THREE.Group

        await mindarThree.start();

        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera);
        });

        window.addEventListener('beforeunload', () => {
            renderer.setAnimationLoop()
            mindarThree.stop()
        })
    }
    start();


});
