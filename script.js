const boton = document.querySelector('#boton');
const texto = document.querySelector('#texto');

boton.addEventListener('click', () => {
  texto.hidden = !texto.hidden;
});

const garden = document.querySelector('.jardin');
const canvas = document.querySelector('#flores');
const still = document.querySelector('#jardin-estatico');
const paint = canvas.getContext('2d');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const gardenBlues = ['#676eaa', '#7885ba', '#5c72ac'];
const accents = [
  { x: .16, height: .66, lean: .12, size: .085, color: '#a44c79', petals: 5, startsOpen: true },
  { x: .41, height: .38, lean: -.055, size: .071, color: '#61539d', petals: 8, startsOpen: true },
  { x: .65, height: .54, lean: -.055, size: .103, color: '#a16339', petals: 6, startsOpen: true },
  { x: .87, height: .76, lean: -.072, size: .061, color: '#487a68', petals: 7, startsOpen: true },
  { x: .46, height: .85, lean: -.022, size: .096, color: '#2448b6', petals: 7, startsOpen: true },
];
const bayer = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];

function randomField(seed) {
  let state = seed;
  return () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function wildflowers(count, seed, depth) {
  const random = randomField(seed);
  return Array.from({ length: count }, (_, index) => ({
    x: random() * 1.35 - .17,
    height: (.09 + random() ** 1.25 * .77) * depth,
    lean: (random() - .5) * .34,
    size: (.014 + random() ** 2 * .047) * depth,
    petals: 4 + Math.floor(random() * 6),
    color: gardenBlues[(index + seed) % gardenBlues.length],
    startsOpen: (index + seed) % 5 === 0,
  }));
}

const layers = [
  { plants: wildflowers(56, 203, .91), alpha: .27, travel: 8 },
  { plants: wildflowers(40, 425, 1), alpha: .43, travel: 20 },
  { plants: [...wildflowers(17, 562, .73), ...accents], alpha: .68, travel: 38 },
].map(layer => ({ ...layer, image: document.createElement('canvas') }));

function drawStem(ctx, plant, width, height, opacity) {
  const { x, height: reach, lean, size, color, petals } = plant;
  const unit = Math.min(width, height * 1.7);
  const stem = height * reach;
  const bend = lean * unit;
  const radius = size * unit;

  ctx.save();
  ctx.translate(x * width, height * 1.03);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.globalAlpha = opacity;
  ctx.lineWidth = Math.max(.6, radius * .033);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(bend * .1, -stem * .62, bend, -stem);
  ctx.stroke();

  const leafCount = Math.max(2, Math.round(reach * 6));
  for (let leaf = 0; leaf < leafCount; leaf++) {
    const t = .16 + leaf / leafCount * .67;
    const direction = leaf % 2 === 0 ? 1 : -1;
    const length = (1.5 + Math.sin(leaf * 2 + x * 10) * .45) * radius * (1 - t * .6);
    ctx.save();
    ctx.translate(bend * (.2 * t + .8 * t * t), -stem * (1.24 * t - .24 * t * t));
    ctx.rotate(direction * (.62 + t * .58));
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-length * .33, -length * .54, 0, -length);
    ctx.quadraticCurveTo(length * .27, -length * .51, 0, 0);
    ctx.fill();
    ctx.restore();
  }

  ctx.restore();
}

function drawBud(ctx, plant, radius, opacity) {
  const { x, height: reach, lean, color } = plant;
  const variation = randomField(Math.round((x + 1) * 8803 + reach * 2137));
  const height = radius * (.76 + variation() * .23);
  const width = height * (.26 + variation() * .08);
  const slant = .13 + variation() * .22;
  ctx.save();
  ctx.rotate(Math.atan2(lean * 2.1, reach) + slant);
  ctx.globalAlpha = opacity;

  // Long, narrow bracts project from the lower half of the bud.
  ctx.fillStyle = color;
  for (const side of [-1, 1]) {
    for (let bract = 0; bract < 2; bract++) {
      const base = height * (.035 + bract * .09 + (side > 0 ? .09 : 0));
      const tipX = width * (1.03 + variation() * .31) * side;
      const tipY = -base - height * (.11 + bract * .06 + variation() * .06);
      ctx.beginPath();
      ctx.moveTo(side * width * .2, -base + height * .034);
      ctx.quadraticCurveTo(tipX * .65, -base - height * .025, tipX, tipY);
      ctx.quadraticCurveTo(tipX * .64, -base - height * .11, side * width * .17, -base);
      ctx.fill();
    }
  }

  const gradient = ctx.createLinearGradient(width * .38, 0, -width * .4, -height);
  gradient.addColorStop(0, color);
  gradient.addColorStop(.45, color + 'ec');
  gradient.addColorStop(.8, color + 'ad');
  gradient.addColorStop(1, color + '68');
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(-width * .09, height * .07);
  ctx.bezierCurveTo(-width * .81, -height * .09, -width * .98, -height * .32, -width * .78, -height * .49);
  ctx.quadraticCurveTo(-width * .63, -height * .63, -width * .46, -height * .77);
  ctx.lineTo(-width * .3, -height * .72);
  ctx.quadraticCurveTo(-width * .09, -height * .89, width * .17, -height);
  ctx.lineTo(width * .39, -height * 1.05);
  ctx.quadraticCurveTo(width * .35, -height * .9, width * .51, -height * .86);
  ctx.lineTo(width * .57, -height * .91);
  ctx.bezierCurveTo(width * .62, -height * .71, width * 1.14, -height * .4, width * .7, -height * .18);
  ctx.quadraticCurveTo(width * .46, -height * .05, -width * .09, height * .07);
  ctx.fill();

  // Overlapping scales break up the outline without a smooth oval border.
  ctx.fillStyle = color + '81';
  for (let scale = 0; scale < 5; scale++) {
    const side = scale % 2 ? -1 : 1;
    const y = -height * (.13 + scale * .13);
    const length = height * (.21 + variation() * .12);
    const tip = width * (.56 + variation() * .37) * side;
    const base = width * (.13 + variation() * .25) * side;
    ctx.beginPath();
    ctx.moveTo(base, y);
    ctx.quadraticCurveTo(tip * .33, y - length * .62, tip, y - length);
    ctx.quadraticCurveTo(tip * .71, y - length * .43, base, y);
    ctx.fill();
  }
  ctx.restore();
}

function drawBloom(ctx, plant, radius, opacity, progress) {
  const { x, height, lean, color, petals } = plant;
  const variation = randomField(Math.round((x + 1) * 17381 + height * 101111));
  const turn = lean * 2 + variation() * Math.PI;
  const budVisibility = Math.max(0, 1 - progress / .64);
  if (budVisibility > 0) drawBud(ctx, plant, radius, Math.min(.9, opacity + .29) * budVisibility);
  if (progress === 0) return;
  ctx.save();
  ctx.rotate(turn);
  ctx.scale(1, .56 + variation() * .41);
  for (let petal = 0; petal < petals; petal++) {
    const order = (petal + Math.floor(x * petals + petals)) % petals;
    const delay = .62 * order / (petals - 1);
    const step = Math.max(0, Math.min(1, (progress - delay) / (1 - .62)));
    const open = step * step * (3 - 2 * step);
    const rest = .22 + variation() * .23;
    const length = radius * (.57 + variation() * .57) * (rest + (1 - rest) * open);
    const breadth = radius * (.41 + variation() * .42) * (.36 + .64 * open);
    const bias = (variation() - .5) * .85;
    const shoulder = .84 + variation() * .18;
    const cleft = .025 + variation() * .095;
    const angle = (petal + (variation() - .5) * .52) * Math.PI * 2 / petals;
    ctx.save();
    ctx.rotate(angle + (1 - open) * .34 * Math.sin(petal * 2.4));
    ctx.globalAlpha = (opacity + (.86 + variation() * .11 - opacity) * open) * Math.min(1, open * 3);
    const gradient = ctx.createLinearGradient(0, 0, breadth * bias, -length);
    gradient.addColorStop(0, color);
    gradient.addColorStop(.3, color + 'e0');
    gradient.addColorStop(.72, color + 'a8');
    gradient.addColorStop(1, color + '75');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-breadth * .29, -length * .29, breadth * (bias - .65), -length * .66, breadth * (bias - .48), -length * shoulder);
    ctx.bezierCurveTo(breadth * (bias - .36), -length * 1.04, breadth * (bias - .15), -length * 1.08, breadth * bias, -length * (1 - cleft));
    ctx.bezierCurveTo(breadth * (bias + .24), -length * 1.075, breadth * (bias + .57), -length * .95, breadth * (bias + .5), -length * .79);
    ctx.bezierCurveTo(breadth * (bias + .42), -length * .49, breadth * .23, -length * .24, 0, 0);
    ctx.fill();
    ctx.restore();
  }

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.globalAlpha = (opacity + (.87 - opacity) * progress) * (1 - budVisibility);
  ctx.ellipse(0, 0, radius * (.085 + .075 * progress), radius * (.065 + .055 * progress), .25, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function stipple(ctx, width, height, opacity = 207) {
  const pixels = ctx.getImageData(0, 0, width, height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const alpha = (y * width + x) * 4 + 3;
      const threshold = (bayer[(y % 4) * 4 + x % 4] + .5) * 16;
      const dot = Math.min(pixels.data[alpha], 184) > threshold;
      pixels.data[alpha] = dot ? opacity : 0;
    }
  }
  ctx.putImageData(pixels, 0, 0);
}

function makePrint(layer, width, height) {
  const image = layer.image;
  image.width = width;
  image.height = height;
  const ctx = image.getContext('2d');
  for (const plant of layer.plants) {
    drawStem(ctx, plant, width, height, layer.alpha);
  }

  stipple(ctx, width, height);
}

const blooms = layers.flatMap(layer =>
  layer.plants.map(plant => ({
    plant,
    layer,
    openness: Number(Boolean(plant.startsOpen)),
    opening: false,
    holdUntil: 0,
    image: document.createElement('canvas'),
  })));
const changing = new Set();
let coverActive = true;
let restoreAt;
let frame;
let previousTime;
let pointer;
let pointerMoved = false;
let lastPointerMove;
let active;

function bloomPosition(plant, width, height) {
  const unit = Math.min(width, height * 1.7);
  return {
    x: plant.x * width + plant.lean * unit,
    y: height * (1.03 - plant.height),
    radius: plant.size * unit,
  };
}

function findBloom(width, height, offsets, nearby) {
  if (!pointer) return undefined;
  const rect = canvas.getBoundingClientRect();
  let nearest;
  let best = Infinity;
  for (const bloom of blooms) {
    const offset = offsets.get(bloom.layer);
    const px = (pointer.x - rect.left + offset) * width / (width + offset * 2);
    const py = (pointer.y - rect.top + offset) * height / (height + offset);
    const { x, y, radius } = bloomPosition(bloom.plant, width, height);
    const headDistance = Math.hypot(px - x, py - y);
    const brushRadius = Math.max(34, Math.min(98, width * .085));
    if (headDistance < brushRadius) nearby.push(bloom);
    const headRadius = Math.max(9, radius * (.69 + .38 * bloom.openness));
    let score = headDistance <= headRadius ? headDistance / headRadius : Infinity;

    if (score === Infinity && py >= y && py <= height * 1.03) {
      const base = bloom.plant.x * width;
      const stem = height * bloom.plant.height;
      const fraction = (height * 1.03 - py) / stem;
      const t = 2 * fraction / (1.24 + Math.sqrt(1.24 ** 2 - .96 * fraction));
      const stemX = base + (x - base) * (.2 * t + .8 * t * t);
      const reach = Math.max(4, radius * (.72 - .22 * t));
      const gap = Math.abs(px - stemX);
      if (gap <= reach) score = 1 + gap / reach;
    }

    if (score < best) {
      nearest = bloom;
      best = score;
    }
  }
  return nearest;
}

function paintBloom(bloom, width, height) {
  const { x, y, radius } = bloomPosition(bloom.plant, width, height);
  const padding = Math.ceil(radius * 1.4) + 2;
  bloom.x = x;
  bloom.y = y;
  bloom.left = Math.floor((x - padding) / 4) * 4;
  bloom.top = Math.floor((y - padding) / 4) * 4;
  const size = padding * 2 + 4;
  const image = bloom.image;
  if (image.width !== size || image.height !== size) {
    image.width = size;
    image.height = size;
  }

  const ink = image.getContext('2d', { willReadFrequently: true });
  ink.clearRect(0, 0, size, size);
  ink.save();
  ink.translate(x - bloom.left, y - bloom.top);
  drawBloom(ink, bloom.plant, radius, bloom.layer.alpha * .66, bloom.openness);
  ink.restore();
  stipple(ink, size, size);
}

function drawBloomImage(bloom, time, motion) {
  const moving = motion > 0 && bloom.openness === 1;
  if (moving) {
    const phase = bloom.plant.x * 18 + bloom.plant.height * 9;
    paint.save();
    paint.translate(bloom.x, bloom.y);
    paint.rotate(motion * (Math.sin(time / 980 + phase) * .045 + Math.sin(time / 630 + phase) * .012));
    paint.drawImage(bloom.image, bloom.left - bloom.x, bloom.top - bloom.y);
    paint.restore();
  } else {
    paint.drawImage(bloom.image, bloom.left, bloom.top);
  }
  return moving;
}

function renderGarden(time) {
  frame = undefined;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (!paint || !width || !height) return;

  if (canvas.width !== width || canvas.height !== height ||
      layers[0].image.width !== width || layers[0].image.height !== height) {
    canvas.width = width;
    canvas.height = height;
    paint.imageSmoothingEnabled = false;
    layers.forEach(layer => makePrint(layer, width, height));
    blooms.forEach(bloom => paintBloom(bloom, width, height));
  }

  const travel = Math.max(1, height * .6);
  const progress = reducedMotion.matches
    ? 0
    : Math.max(0, Math.min(1, -garden.getBoundingClientRect().top / travel));
  const offsets = new Map(layers.map(layer => [layer, Math.round(progress * layer.travel)]));
  if (restoreAt === 0) restoreAt = time + 1100;
  if (restoreAt !== undefined && time >= restoreAt) {
    coverActive = true;
    restoreAt = undefined;
    for (const bloom of blooms) {
      if (bloom.plant.startsOpen) {
        bloom.opening = bloom.openness < 1;
        changing.add(bloom);
      }
    }
  }

  const nearby = [];
  const hovered = findBloom(width, height, offsets, nearby);
  const next = hovered ?? (pointer ? active : undefined);
  if (next !== active && active) changing.add(active);
  active = next;
  if (hovered) nearby.push(hovered);

  for (const bloom of nearby) {
    bloom.holdUntil = time + 2700;
    bloom.opening = bloom.openness < 1;
    changing.add(bloom);
  }


  const elapsed = previousTime === undefined ? 16 : Math.min(50, time - previousTime);
  previousTime = time;
  for (const bloom of changing) {
    const before = bloom.openness;
    const staysOpen = bloom === active || (coverActive && bloom.plant.startsOpen);
    if (reducedMotion.matches) {
      bloom.openness = Number(staysOpen || nearby.includes(bloom));
      bloom.opening = false;
      bloom.holdUntil = 0;
      changing.delete(bloom);
    } else if (bloom.opening) {
      bloom.openness = Math.min(1, bloom.openness + elapsed / 1350);
      if (bloom.openness === 1) {
        bloom.opening = false;
        bloom.holdUntil = Math.max(bloom.holdUntil, time + 320);
      }
    } else if (staysOpen) {
      changing.delete(bloom);
    } else if (time < bloom.holdUntil) {
      continue;
    } else {
      bloom.openness = Math.max(0, bloom.openness - elapsed / 2600);
      if (bloom.openness === 0) changing.delete(bloom);
    }

    if (bloom.openness !== before) paintBloom(bloom, width, height);
  }


  if (pointerMoved) {
    lastPointerMove = time;
    pointerMoved = false;
  }
  const motion = pointer && lastPointerMove !== undefined && !reducedMotion.matches
    ? Math.max(0, 1 - (time - lastPointerMove) / 420)
    : 0;
  let swaying = false;
  paint.clearRect(0, 0, width, height);
  for (const layer of layers) {
    const offset = offsets.get(layer);
    paint.save();
    paint.translate(-offset, -offset);
    paint.scale((width + offset * 2) / width, (height + offset) / height);
    paint.drawImage(layer.image, 0, 0);
    for (const bloom of blooms) {
      if (bloom.layer === layer && bloom !== active) swaying = drawBloomImage(bloom, time, motion) || swaying;
    }
    if (active?.layer === layer) swaying = drawBloomImage(active, time, motion) || swaying;
    paint.restore();
  }

  still.hidden = true;
  if (changing.size || swaying || restoreAt !== undefined) scheduleGarden();
}

function scheduleGarden() {
  if (frame === undefined) frame = requestAnimationFrame(renderGarden);
}

function locatePointer(event) {
  pointerMoved = event.pointerType !== 'touch';
  restoreAt = undefined;
  if (coverActive) {
    coverActive = false;
    for (const bloom of blooms) {
      if (bloom.plant.startsOpen) changing.add(bloom);
    }
  }
  pointer = { x: event.clientX, y: event.clientY };
  scheduleGarden();
}

function clearPointer() {
  pointerMoved = false;
  lastPointerMove = undefined;
  if (!coverActive) restoreAt = 0;
  pointer = undefined;
  scheduleGarden();
}

canvas.addEventListener('pointermove', event => {
  if (event.pointerType !== 'touch') locatePointer(event);
});
canvas.addEventListener('pointerdown', locatePointer);
canvas.addEventListener('pointerleave', event => {
  if (event.pointerType !== 'touch') clearPointer();
});
canvas.addEventListener('pointercancel', clearPointer);
addEventListener('scroll', scheduleGarden, { passive: true });
addEventListener('resize', scheduleGarden);
reducedMotion.addEventListener('change', scheduleGarden);
scheduleGarden();