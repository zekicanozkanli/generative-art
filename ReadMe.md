# Generative Art

Here are some generative art pieces I made using p5.js


## 1. Yin and Yang

![yin and yang](yin_and_yang/yin_and_yang.gif)

### i. Shape Function
The distinction between the fishes's smooth head and chaotic tentacles is defined by the piecewise function

$$
\Sigma(j) = 
\begin{cases} 
8 + 6 \sin(\lfloor j \rfloor \oplus 9) & \text{if } j < 8 \\
3 + \tan(j) & \text{if } j \ge 8,
\end{cases}
$$

where $j$ is a parameter obtained from $i$ and$  $\oplus$ denotes the bitwise XOR operation.

### ii. Dynamics
The motion is driven by an auxiliary oscillator $\kappa$ and a distance metric $\delta$ defined by

$$\kappa(\cdot) = \Sigma(y) \cdot \cos(i + \frac{t}{4}) \quad \text{ and } \quad \delta(\cdot) = \sqrt{\kappa^2 + \varepsilon^2} + \cos(\varepsilon + 2t + 4 \cdot (i \text{ mod } 2)),$$

where $i$ is the index of the point, $t$ the time, and $\varepsilon$ the normalized vertical shift.

### iii. Position Vector
Finally, the position vector $p$ is defined as

$$
p = (r cos(\theta) + 400, r sin(\theta) + 200), 
$$

where

$$
\begin{align*}
r &= \frac{y \kappa}{5} \left( 2 + \sin(2\delta + y - 4t) \right) + 80 \\
\theta &= \frac{\delta}{4} - \frac{t}{2} + 3 \cdot (i \text{ mod } 2).
\end{align*}
$$