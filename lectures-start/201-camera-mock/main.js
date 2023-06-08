const THREE = window.MINDAR.IMAGE.THREE;
import { mockWithVideo, mockWithImage } from '../../libs/camera-mock.js'

document.addEventListener('DOMContentLoaded', () => {
  const start = async () => {

    //mockWithVideo("../../assets/mock-videos/course-banner1.mp4")
    mockWithImage("../../assets/mock-videos/course-banner1.png")

    // navigator.mediaDevices.getUserMedia = () => {
    //   return new Promise((resolve, reject) => {
    //     const video = document.createElement("video");
    //     video.setAttribute("src", "../../assets/mock-videos/course-banner1.mp4");
    //     video.setAttribute("loop", "");

    //     video.oncanplay = () => {
    //       video.play();
    //       resolve(video.captureStream());
    //     }
    //   })
    // }

    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: '../../assets/targets/course-banner.mind',
    });
    const { renderer, scene, camera } = mindarThree;

    const geometry = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.5 });
    const plane = new THREE.Mesh(geometry, material);

    const anchor = mindarThree.addAnchor(0);
    anchor.group.add(plane);

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start();
});
