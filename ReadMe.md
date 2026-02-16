# Generative Art

## Here are some generative art pieces I made using p5.js


### 1. Yin and Yang

## 🪼 Mathematical Model

The animation renders a particle cloud of $N=10,000$ points. The position of each point is determined procedurally based on its index $i$ and time $t$.

The system transforms a linear index into a complex polar coordinate system modulated by bitwise chaos and trigonometric waves.

### 1. Parameters
For each point $i \in [1, 10000]$ and time $t$:
* **Density Parameter:** $y = i / 1000$
* **Base Offset:** $\epsilon = y/13 - 13$

### 2. Shape Function ($\tau$)
The geometry is split into two behaviors (Head vs. Tail) using a conditional function. The "Head" uses a bitwise XOR operation to create discrete layers, while the "Tail" uses a tangent function for scattering.

$$
\tau(y) =
\begin{cases}
8 + 6 \sin(\lfloor y \rfloor \oplus 9) & \text{if } y < 8 \text{ (Head)} \\
3 + \tan(y) & \text{if } y \ge 8 \text{ (Tail)}
\end{cases}
$$

### 3. Wave Dynamics
The shape function is modulated to create the undulating movement.

* **Modulation Factor ($\kappa$):**
    $$\kappa = \tau(y) \cdot \cos(i + t/4)$$

* **Distortion Field ($\delta$):**
    Combines the magnitude of the modulation with a parity-based wave (creating the separation between the two jellyfish).
    $$\delta = \sqrt{\kappa^2 + \epsilon^2} + \cos(\epsilon + 2t + 4(i \bmod 2))$$

### 4. Polar Coordinates
The final positions are calculated by converting derived polar coordinates $(\rho, \theta)$ into Cartesian space.

* **Radius ($\rho$):**
    $$\rho = \frac{y \cdot \kappa}{5} \left( 2 + \sin(2\delta + y - 4t) \right) + 80$$

* **Angle ($\theta$):**
    The term $3(i \bmod 2)$ shifts half the points by approx $\pi$ radians, creating the dual opposition.
    $$\theta = \frac{\delta}{4} - \frac{t}{2} + 3(i \bmod 2)$$

### 5. Final Projection
The screen coordinates $(x, y_{screen})$ are:

$$
\begin{align*}
x &= 400 + \rho \cos(\theta) \\
y_{screen} &= 65 + \rho \sin(\theta) + 9\delta
\end{align*}
$$

![yin and yang](yin_and_yang/yin_and_yang.gif)