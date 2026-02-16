# Generative Art

Here are some generative art pieces I made using p5.js


## 1. Yin and Yang



### i. Shape Function
The distinction between the fish's smooth head and chaotic tail is defined by the piecewise function

$$
\Sigma(y) = 
\begin{cases} 
8 + 6 \sin(\lfloor y \rfloor \oplus 9) & \text{if } y < 8 \\
3 + \tan(y) & \text{if } y \ge 8,
\end{cases}
$$

where $y$ is the !!!  $\oplus$ denotes the bitwise XOR operation.

### ii. Dynamics
The motion is driven by an auxiliary oscillator $\kappa(\cdot)$ and a distance metric $\delta(\cdot)$ defined by

$$\kappa = \Sigma(y) \cdot \cos(i + \frac{t}{4}) \quad \text{ and } \quad \delta = \sqrt{\kappa^2 + \varepsilon^2} + \cos(\varepsilon + 2t + 4 \cdot (i \text{ mod } 2)),$$

where $i$ is the index of the point, $t$ the time, and $\varepsilon$ is a normalized vertical shift.

### iii. Polar Projection
Finally, the Cartesian screen coordinates $(x, y)$ are derived by converting the modulated polar coordinates $(r, \theta)$ back to Cartesian space:

$$
\begin{align*}
r &= \frac{y \kappa}{5} \left( 2 + \sin(2\delta + y - 4t) \right) + R_{base} \\
\theta &= \frac{\delta}{4} - \frac{t}{2} + 3p
\end{align*}
$$

$$
\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} r \cos(\theta) + C_x \\ r \sin(\theta) + 9\delta + C_y \end{bmatrix}
$$

![yin and yang](yin_and_yang/yin_and_yang.gif)